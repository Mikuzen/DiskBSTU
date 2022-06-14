@extends('layout.app')

@section('content')
    <span class="h1 text-uppercase fw-bold p-3 pb-0 text-info m-0">Корзина</span>
    <span class="text-danger m-0">(очищается автоматически в первый день месяца, в 3:00 по Московскому времени)</span>
    <hr>
    <div class="row mx-auto">
        @include('disk.part.files_trash')
    </div>

    {{ $files->links() }}
@endsection
