@foreach($files as $file)
    @php
        $url = Storage::url('files/' . Auth::id() . '/'. $file->folder. '/' );
        $link = str_replace('/','',Hash::make($file->src . Carbon\Carbon::now()->timestamp . $file->ext));
    @endphp
    <div class="col-md-1 m-3 text-center">
        <div class="h-auto w-auto align-middle p-auto position-relative">
            <div style="height: 20px">
                <a class="position-absolute top-0 end-0 text-dark" type="button" id="dropdownCenterBtn"
                   data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                    <i class="bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu text-center rounded-1" aria-labelledby="dropdownCenterBtn">
                    <li class="p-0 m-0">
                        @isset($file->link->link)
                            <input type="hidden" id="{{ $file->id }}"
                                   value="{{ route('show', ['id' => $file->id,
                                                                            'link' => $file->link->link]) }}">
                            <button type="submit" class="btn bg-transparent text-primary"
                                    onclick="copyToClipboard('{{ $file->id }}')" style="font-size: 12pt">Скопировать
                                ссылку
                            </button>
                        @else
                            <form action="{{ route('disk.open', ['id' => $file->id, 'link' => $link]) }}"
                                  method="post">
                                @csrf
                                @method('PATCH')
                                <input type="hidden" id="{{ $file->id }}"
                                       value="{{ route('show', ['id' => $file->id,
                                                                           'link' => $link]) }}">
                                <button type="submit" class="btn bg-transparent text-primary"
                                        onclick="copyToClipboard('{{ $file->id }}')" style="font-size: 12pt">Поделиться
                                </button>
                        @endisset
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    @if (!$file->private)
                        <li class="p-0 m-0">
                            <form action="{{ route('disk.close', ['id' => $file->id]) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <button type="submit" class="btn bg-transparent text-warning" style="font-size: 12pt">
                                    Закрыть доступ к файлу
                                </button>
                            </form>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                    @endif
                    <li class="p-0 m-0">
                        <form></form>
                        <form action="{{ route('disk.download', ['id' => $file->id, 'token' => csrf_token()] )}}">
                            @csrf
                            <button type="submit" class="btn bg-transparent text-primary" style="font-size: 12pt">
                                Скачать
                            </button>
                        </form>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li class="p-0 m-0">
                        <form action="{{ route('disk.destroy', ['id' => $file->id, 'isSoft' => 1 ] ) }}" method="post">
                            @method('DELETE')
                            @csrf
                            <button type="submit" class="btn bg-transparent text-danger" style="font-size: 12pt">
                                Поместить в
                                корзину
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
            <div class="group-card" data-toggle="tooltip" data-placement="auto" title="{{$file->title}}">
                @include('disk.part.src')
                <div class="text-truncate text-center px-3" id="title" style="word-wrap: break-word;">
                    {{ $file->title}}
                </div>
                {{ '.' .$file->ext }}
            </div>
            <div class="text-center">

            </div>
        </div>

    </div>
@endforeach
