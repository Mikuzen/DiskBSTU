<template>
    <div class="w-25 m-auto mt-3 text-center">

        <h3>Добавление нового пользователя</h3>
        <div class="mb-3">
            <input type="text" v-model="name" class="form-control" placeholder="Имя пользователя">
        </div>
        <div class="mb-3">
            <input type="email" v-model="email" class="form-control" placeholder="Эл. почта пользователя">
        </div>
        <div class="mb-3">
            <input type="password" v-model="password" class="form-control" placeholder="Пароль(мин. 8 символов)">
        </div>
        <div class="mb-3">
            <input type="password" v-model="password_confirmation" class="form-control"
                   placeholder="Введите пароль еще раз">
        </div>
        <div class="mb-3">
            <input type="submit" @click.prevent="store" value="Создать пользователя" class="btn btn-primary">
        </div>

    </div>
</template>

<script>
import router from "../../router";

export default {
    name: "Create",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            errors: null,
            status: null,
        }
    },

    methods: {
        store() {
            axios.post('/api/V1/users', {
                name: this.name,
                email: this.email,
                admin: this.admin,
                password: this.password,
                password_confirmation: this.password_confirmation,
            }).then(res => {
                router.push({name: 'user.index'})
            })
                .catch(error => {
                        if (error.response) {
                            this.status = error.response.status;
                            this.errors =  error.response.data.errors;
                        } else if (error.request) {
                            this.errors = error.request.errors
                        } else {
                            console.log('Error', error.message);
                        }
                    }
                )
        }
    }

}
</script>

<style scoped>

</style>
