const app = new Vue({
    el: '#app',
    data: {
        title: 'Test',
        text: 'Text Text Text',
    },

    computed: {

    },
    methods: {
        f() {
            alert(this.title);
        }
    },
})