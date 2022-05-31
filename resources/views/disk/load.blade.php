@extends('layout.app')

@section('content')
    @if (session('errors'))
        <div class="alert alert-danger mt-0">
            {{ trim(stristr(stristr(session('errors'), '['), ']', true), '[') }}
        </div>
    @endif
    <h2>
        Загрузка файла
    </h2>
    <form enctype="multipart/form-data" action="{{ route('disk.store') }}" class="m-2" method="post">
        @csrf
        <input multiple="multiple" type="file" name="files[]" class="form-control-file">
        <button type="submit" class="btn btn-primary">Добавить</button>
    </form>
@endsection
