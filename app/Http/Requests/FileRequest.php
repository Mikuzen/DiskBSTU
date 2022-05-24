<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileRequest extends FormRequest
{
    private $allMimes = ['jpeg', 'jpg', 'png', 'gif', 'bmp',
        'mpeg', 'mp3', 'mp4', 'avi', 'wav',
        'zip', 'pdf', 'doc', 'docx', 'rar'];


    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'files.*' => 'required|file|mimes:.' . implode(',', $this->allMimes)
        ];
    }

    public function messages()
    {
        return [
            'files.required' => 'You have not selected a file',
            'files.mimes' => 'The file must be of the following types: ' . implode(',', $this->allMimes)
        ];
    }
}
