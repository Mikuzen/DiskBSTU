<template>
    <div>
        <li class="mx-3">
            <router-link :to="{ name: 'user.index' }" class="text-decoration-none text-white">
                <i class="bi bi-person text-white"></i>
                Пользователи
            </router-link>
        </li>
    </div>

</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>

</style>
