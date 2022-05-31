import Vue from "vue";
import router from "./router";

import Navbar from "./components/Navbar";
import Index from "./components/Index";

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        Navbar,
        Index,
    },

    router
});
