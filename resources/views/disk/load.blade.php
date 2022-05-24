@extends('layout.app')

@section('content')
    @if (session('errors'))
        <div class="alert alert-danger mt-0">
            {{ trim(stristr(stristr(session('errors'), '['), ']', true), '[') }}
        </div>
    @endif

    <form enctype="multipart/form-data" action="{{ route('disk.store') }}" class="m-2" method="post">
        @csrf
        {{--        <label class="text-danger">Загрузка несколькиx файлов в процессе разработки!</label><br>--}}
        <input multiple="multiple" type="file" name="files[]" class="form-control-file">
        <button type="submit" class="btn btn-primary">Добавить</button>
    </form>
@endsection
