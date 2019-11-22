let app = new Vue({
    el: '#app',
    data: {
        title: 'Test',
        text: 'Text Text Text',
        // textRu: 'Текст Текст Текст',
        reverseCard: false,
        cards: null,
        cardsJSON: [
            {
                "theme": "Conversation",
                "sourceText": "Do you speak a language other than English?",
                "translation": "Говоришь ли ты на другом языке кроме английского?"
            },
            {
                "theme": "Eating out",
                "sourceText": "Excuse me. We would like to order, please.",
                "translation": "Извините, мы бы хотели сделать заказ."
            },
            {
                "theme": "Eating out",
                "sourceText": "A table for two, please.",
                "translation": "Столик на двоих, пожалуйста."
            },
        ],
    },

    computed: {
    },

    methods: {
        translate() {
            this.reverseCard = !this.reverseCard
            setTimeout(() => {
                this.reverseCard = false
            }, 3000);
            return
        }
    },
    mounted() {
        this.cards = this.cardsJSON

        // this.cards = JSON.parse(this.cardsJSON)
        // console.log(this.cards)
    }
})  