@extends('layout.app')

@section('content')
    <div class="text-center p-3">
        @switch($file->type)
            @case('image')
            <img src="{{ $url }}" alt="" class="h-50 w-50">
            @break
            @case('video')
            <video controls>
                <source src="{{ $url }}" type="video/{{ $file->ext }}">
            </video>
            @break
            @case('audio')
            <div class=" h-100 justify-content-center align-items-center p-0">
                <div>
                    <img src="{{Storage::url('/audio.png')}}" alt="">
                </div>
                <div class="container-fluid d-flex h-100 justify-content-center align-items-center m-2  ">
                    <audio controls>
                        <source src="{{ $url }}" type="audio/{{ $file->ext }}">
                    </audio>
                </div>
            </div>
            @break
            @default
            <img src="{{ Storage::url('/oc.png') }}" alt="">
        @endswitch
    </div>

    <div class="text-center">
        {{ $file->title . '.' . $file->ext }}
        <form action="{{ route('download', ['id' => $file->id, 'token' => csrf_token()] )}}"
              method="get">
            @csrf
            <button type="submit" class="btn btn-primary">Download</button>
        </form>
    </div>
@endsection
