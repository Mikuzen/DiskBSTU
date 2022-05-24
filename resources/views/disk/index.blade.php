@extends('layout.app')

@section('content')
    <h1 class="text-uppercase fw-bold pb-0">
        <span class="text-info m-0">Все</span>
        <span class="text-dark m-0">файлы</span>
    </h1>
    <hr>
    <div class="row mx-auto">
        @include('disk.part.files_index')
    </div>
    <div class="align-middle text-center mx-auto">
        {{ $files->links() }}
    </div>


    <script type="text/javascript">
        function copyToClipboard(id) {
            let url = document.getElementById(id).value;
            const el = document.createElement('textarea');
            el.value = url;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    </script>
@endsection
