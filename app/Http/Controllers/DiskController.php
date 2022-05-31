<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileRequest;
use App\Models\File;
use App\Models\FileLink;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class DiskController extends Controller
{
    private $imageMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/vnd.wap.bmp'];
    private $videoMimes = ['video/mpeg', 'video/mp4', 'video/x-msvideo'];
    private $audioMimes = ['audio/mpeg', 'video/mp4', 'video/wnd.wave'];

    public function index()
    {
        $files = File::where('user_id', Auth::id())->with('link')->orderByDesc('updated_at')->paginate(45);

        return view('disk.index')->withFiles($files);
    }

    public function trash()
    {
        $files = File::where('user_id', Auth::id())->onlyTrashed()->orderByDesc('deleted_at')->paginate(45);

        return view('disk.trash')->withFiles($files);
    }

    public function filter($type)
    {
        $files = File::where([['user_id', Auth::id()], ['type', $type]])->orderByDesc('updated_at')->paginate(45);

        return view('disk.' . $type)->withFiles($files);
    }

    public function create()
    {
        return view('disk.load');
    }

    public function store(FileRequest $request)
    {
        $dataRequest = $this->getDataRequest($request);

        foreach ($dataRequest['files'] as $file) {
            $dataForDB = $this->getDataForDB($dataRequest['user']->name, $file);

            if (!Storage::disk('public')->has('files/' . $dataRequest['user']->id
                . '/' . $dataRequest['folder'] . '/resize')) {
                Storage::disk('public')->makeDirectory('files/' . $dataRequest['user']->id
                    . '/' . $dataRequest['folder'] . '/resize');
            }

            if ($dataForDB['type'] == 'image') {
                Image::make($file)->resize(250, 250)
                    ->save($dataRequest['folderResize'] . '/' . $dataForDB['src']);
            }

            Storage::putFileAs($dataRequest['folderOriginal'], $file, $dataForDB['src']);

            File::create([
                'user_id' => $dataRequest['user']->id,
                'src' => $dataForDB['src'],
                'ext' => $dataForDB['ext'],
                'title' => $dataForDB['title'],
                'size' => $dataForDB['size'],
                'type' => $dataForDB['type'],
                'folder' => $dataRequest['folder']
            ]);
        }

        return redirect()->route('disk.index')->with('success', 'Файлы были успешно загружены.');
    }

    public function download($id, $token)
    {
        if ($token == csrf_token()) {
            $file = $this->getDataFile($id);

            return Storage::disk('public')->download($file['url'], $file['title']);
        } else {
            return redirect()->route('disk.index');
        }
    }

    public function open($id, $link)
    {
        $string = 'Ссылка скопирована в буфер.';
        $link = str_replace('$', '', $link);
        $file = File::where('id', $id)->with('link')->firstorFail();

        if (!isset($file->link->link)) {
            FileLink::create([
                'file_id' => $file->id,
                'link' => $link
            ]);

            $file->private = 0;
            $file->save();
            $string = 'Ссылка была создана, открыта и скопирована в буфер.';
        }

        return back()->with('success', $string);
    }

    public function close($id)
    {
        $file = File::where('id', $id)->with('link')->firstOrFail();
        $link = $file->link;
        $link->delete();

        $file->private = 1;
        $file->save();

        return back()->with('success', 'Ссылка была удалена');
    }

    public function restore($id)
    {
        File::withTrashed()->where('id', $id)->restore();

        return back()->with('success', 'Файл был восстановлен.');
    }

    public function show(Request $request, $id)
    {
        $file = File::where('id', $id)->with('link')->firstOrFail();
        $condition = $file->private;

        if (isset($file->link)) {
            $link = $request->input('link');
            $condition = $condition && $file->link->link === $link;
        }

        if ($condition) {
            return redirect()->route('welcome')->with('error', 'Ссылка на файл больше недоступна');
        }

        $url = Storage::url('files/' . $file->user_id . '/' . $file->folder . '/' . $file->src);

        return view('disk.show')->with(array('file' => $file, 'url' => $url));
    }

    public function destroy($id)
    {
        $string = 'Вы не можете удалить файл, пока не удалена ссылка на него';
        $typeMessage = 'error';

        $file = File::where('id', $id)->withTrashed()->with('link')->firstOrFail();
        if (!isset($file->link->link)) {
            File::where('id', $id)->delete();
            $string = 'Файл был помещен в корзину';
            $typeMessage = 'success';
        }

        return back()->with($typeMessage, $string);
    }

    private function getDataFile($id)
    {
        $file = File::where('id', $id)->withTrashed()->firstOrFail();
        $title = $file->title . '.' . $file->ext;
        $url = 'files/' . $file->user_id . '/' . $file->folder . '/' . $file->src; // ../../awd

        return [
            'url' => $url,
            'title' => $title
        ];
    }

    private function getDataRequest($request)
    {
        $user = Auth::user();
        $folder = Carbon::now()->toDateString();
        $folderResize = public_path('storage/files/' . $user->id . '/' . $folder . '/resize');
        $folderOriginal = 'public/files/' . $user->id . '/' . $folder;
        $files = $request->file('files');


        return [
            'user' => $user,
            'folder' => $folder,
            'folderResize' => $folderResize,
            'folderOriginal' => $folderOriginal,
            'files' => $files
        ];
    }

    private function getDataForDB($user, $file)
    {
        $mime = $file->getMimeType();
        $title = strstr($file->getClientOriginalName(), '.', true);
        $size = $file->getSize();
        $size = round($size / 1024);
        $ext = $file->getClientOriginalExtension();
        $src = $user . Carbon::now()->timestamp . $title . '.' . $ext; //Carbon::now()->timestamp

        $type = $this->getType($mime);

        return [
            'src' => $src,
            'ext' => $ext,
            'title' => $title,
            'size' => $size,
            'type' => $type,
        ];
    }

    private function getType($mime) // KISS
    {
        $var = 'app';

        if (in_array($mime, $this->imageMimes)) {
            $var = 'image';
        } elseif (in_array($mime, $this->videoMimes)) {
            $var = 'video';
        } elseif (in_array($mime, $this->audioMimes)) {
            $var = 'audio';
        }

        return $var;
    }
}
