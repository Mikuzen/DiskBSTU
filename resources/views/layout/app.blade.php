<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf_token" content="{{ csrf_token() }}">

    <title>Диск БГТУ</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            font-size: 14pt;
            max-width: 99vw;
        }

        i {
            width: 16px;
            height: 16px;
        }

        .group-card {
            vertical-align: middle;
        }

        #file-item {
            width: 100%;
            height: 100%;
        }

        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        .b-example-divider {
            height: 3rem;
            background-color: rgba(0, 0, 0, .1);
            border: solid rgba(0, 0, 0, .15);
            border-width: 1px 0;
            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }

        .b-example-vr {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
        }

        .bi {
            vertical-align: -.125em;
            fill: currentColor;
        }

        .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
        }

        .nav-scroller .nav {
            display: flex;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }
    </style>

</head>
<body>
<main id="app">
    <div class="row">
        <div class="col-2">
            <div class="d-flex flex-column flex-shrink-0 p-3 sticky-top"
                 style="min-height: 100vh; background-color: #F5F5F5">
                <a href="{{ route('disk.index') }}"
                   class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="https://www.bstu.ru/shared/attachments/45735" width="32" height="32"
                         class="rounded-2 me-2 bg-light">
                    <span class="text-info fs-4">Диск.</span>
                    <span class="text-dark fs-4">БГТУ</span>
                </a>
                <hr>
                @auth
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <a href="{{ route('disk.create') }}" class="nav-link " aria-current="page">

                                <i class="bi-file-earmark-plus"></i>
                                Добавить файл
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('disk.index') }}" class="nav-link link-dark" aria-current="page">
                                <i class="bi-files"></i>
                                Файлы
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('disk.filter', ['type' => 'image']) }}" class="nav-link link-dark"
                               aria-current="page">
                                <i class="bi-image"></i>
                                Изображения
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('disk.filter', ['type' => 'video']) }}" class="nav-link link-dark"
                               aria-current="page">
                                <i class="bi-camera-video-fill"></i>
                                Видео
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('disk.filter', ['type' => 'audio']) }}" class="nav-link link-dark"
                               aria-current="page">
                                <i class="bi-music-note"></i>
                                Аудио
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('disk.filter', ['type' => 'app']) }}" class="nav-link link-dark"
                               aria-current="page">
                                <i class="bi-file"></i>
                                Другие
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('disk.trash') }}" class="nav-link link-dark">
                                <i class="bi-trash"></i>
                                Корзина
                            </a>
                        </li>
                        @if(Auth::user()->admin)
                            <li>
                                <a href="{{ route('admin.index') }}" class="nav-link link-dark">

                                    <i class="bi bi-incognito"></i>
                                    Админ панель
                                </a>
                            </li>
                        @endif
                    </ul>
                    <hr>

                    <div class="row">
                        <div class="col-sm-6 p-1">
                            <a href="{{ route('home') }}"
                               class="d-flex align-items-center link-dark text-decoration-none">
                                <img src="https://www.bstu.ru/shared/attachments/45735" alt="" width="32" height="32"
                                     class="rounded-circle me-2">
                                <strong>{{ Auth::user()->name }}</strong>
                            </a>
                        </div>
                        <div class="col-sm-6">
                            <form action="{{ route('logout') }}" class="d-inline" method="post">
                                @csrf
                                <button type="submit" class="btn btn-warning"><strong> Выйти</strong></button>
                            </form>
                        </div>
                    </div>
                @else
                    <div class="row">
                        <div class="col-sm-6">
                            <form action="{{ route('login') }}" class="d-inline" method="get">

                                <button class="btn btn-dark"><strong>Войти</strong></button>
                            </form>
                        </div>
                        <div class="col-sm-6">
                            <form action="{{ route('register') }}" class="d-inline" method="get">

                                <button class="btn btn-warning"><strong>Регистрация</strong></button>
                            </form>
                        </div>
                    </div>
                @endauth
            </div>
        </div>
        <div class="col-10 p-1">
            @if (session('success'))
                <div class="alert alert-success mt-0" role="alert">
                    {{ session('success') }}
                </div>
            @endif
            @if (session('error'))
                <div class="alert alert-danger mt-0" role="alert">
                    {{  session('error') }}
                </div>
            @endif
            @yield('content')
        </div>
    </div>
</main>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
