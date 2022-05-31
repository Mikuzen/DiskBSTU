<template>
    <ul class="nav mb-2 justify-content-center mb-md-0">
        <li class="mx-3">
            <router-link :to="{ name: 'user.index' }" class="text-decoration-none text-white">
                <i class="bi-person text-white"></i>
                Пользователи
            </router-link>
        </li>
        <li class="mx-3">
            <router-link :to="{ name: 'file.index' }" class="text-decoration-none text-white">
                <i class="bi-files text-white"></i>
                Файлы
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
