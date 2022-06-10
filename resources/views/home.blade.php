@extends('layout.app')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Личный кабинет') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                        {{ __('Вы успешно вошли!') }}
                </div>
            </div>
            <a href="{{ route('disk.index') }}" class="btn btn-primary">Перейте к диску</a>
        </div>
    </div>
@endsection
