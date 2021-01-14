import Vue from 'vue'
import App from './App.vue';

let app = new Vue({
    el:'#app',
    render: function (h) {
        return <App></App>
    }
})
console.log(app)