<div class="row mx-auto">
    @include('disk.part.files_index')
</div>
<div class="align-middle text-center mx-auto">
    {{ $files->links() }}
</div>


<script type="application/javascript">
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
