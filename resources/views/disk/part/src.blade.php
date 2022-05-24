@if ($file->type == 'image')
    <img src="{{ $url . 'resize/' . $file->src   }}" class="img-fluid"
         style="height: auto " alt="">
@elseif ($file->type == 'video')
    <video id="file-item" style=" height: 100% ; width: 100%">
        <source src="{{$url . $file->src}}">
    </video>
@elseif ($file->type == 'audio')
    <img id="file-item" src="{{Storage::url('/audio.png')}}" alt="" style="">
    <audio>
        <source src="{{ $url . $file->src }}" type="audio/{{ $file->ext }}">
    </audio>
@else
    <img id="file-item" src="{{Storage::url('/oc.png')}}" class="img-fluid" alt="">
@endif
