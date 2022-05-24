@foreach($files as $file)
    @php
        $url = Storage::url('files/' . Auth::id() . '/'. $file->folder. '/' );
    @endphp
    <div class="col-md-1 m-1 text-center">
        <div class="h-auto w-auto align-middle p-auto position-relative">
            <div style="height: 20px">
                <a href="" class="position-absolute top-0 end-0 text-dark" type="button" id="dropdownCenterBtn"
                   data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">
                    <svg class="bi pe-none me-2 " width="25" height="25">
                        <use xlink:href="#dots"></use>
                    </svg>
                </a>
                <ul class="dropdown-menu text-center rounded-1">

                    <li class="p-0 m-0">
                        <form action="{{ route('disk.restore', ['id' => $file->id]) }}" method="post">
                            @csrf
                            @method('PATCH')
                            <button type="submit" class="btn bg-transparent text-warning" style="font-size: 12pt">
                                Восстановить файл
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
        <div class="group-card" data-toggle="tooltip" data-placement="auto" title="{{$file->title}}" style="">
            @include('disk.part.src')
            <div class="text-truncate text-center px-3">
                {{ $file->title}}
            </div>
        </div>
        <div class="text-center">
            {{ '.' .$file->ext }}
        </div>
    </div>
@endforeach

