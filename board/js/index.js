let app = new Vue({
    el: '#app',
    data: {
        title: 'Test',
        text: 'Text Text Text',
        date: 5,
        month: 'Jun',
        reverseCard: false,
        cards: null,
        err: '',
    },

    computed: {
        calcDate() {
            return this.date = new Date().getDate()
        },
        calcMonth() {
            return this.month = new Date().toLocaleString('en', { month: 'short' })
        },

    },

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
            return this.reverseCard = !this.reverseCard
            // this.f(card, this.reverseCard )
            // card.sourceText
            // console.log(card.translation)

            // this.reverseCard = !this.reverseCard
            // setTimeout(() => {
            //     this.reverseCard = false
            // }, 3000);
        },

        backTr(card) {
            return this.reverseCard ? card.sourceText : card.translation
        },

        sortByWords() {
            // this.cards.sort((a, b) => {
            //     a.sourceText.length > b.sourceText.length ? 1 : -1
            // })
            // this.cards.sort()
            return this.cards
        },
    },

    async mounted() {
        await this.getData()
        //сортировака 3х массивов
    }
})  