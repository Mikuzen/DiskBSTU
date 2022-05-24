import Vue from "vue";

require('./bootstrap');

Vue.component('exam', require('./components/ExampleComponent').debug)

const app = new Vue({
    el: '#app',
});
