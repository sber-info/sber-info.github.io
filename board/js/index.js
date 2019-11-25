let app = new Vue({
    el: '#app',
    data: {
        reverseCard: false,
        cards: null,
        err: '',
    },

    computed: {
        calcDate() {
            return new Date().getDate()
        },
        calcMonth() {
            return new Date().toLocaleString('en', { month: 'short' })
        },
    },

    watch: {},

    created: {},

    methods: {
        async getData() {
            try {
                this.cards = await fetch('https://raw.githubusercontent.com/sber-info/sber-info.github.io/master/board/json/Phrases.json')
                    .then(data => data.json())
            }
            catch {
                this.err = error
            }
        },

        translate(card) {
            Vue.set(card, 'rev', !card.rev)
            this.cards.push(card)
            return
        },

        rev(card) {
            setTimeout(() => {
                card.rev = false
            }, 3000);
            return card.rev ? card.translation : card.sourceText
        },

        sortByWords() {
            // this.cards.sort((a, b) => {
            //     a.sourceText.length > b.sourceText.length ? 1 : -1
            // })
            // this.cards.sort()
            // return this.cards
        },
    },

    async mounted() {
        await this.getData()
        //сортировака 3х массивов
    }
})  