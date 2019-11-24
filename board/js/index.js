let app = new Vue({
    el: '#app',
    data: {
        title: 'Test',
        // text: 'Text Text Text',
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
                    // this.cards.forEach(el => {
                    //     el.rev=false
                    // });
            }
            catch {
                this.err = error
            }
        },
        translate(card) {
            card.rev = !card.rev
            this.reverseCard = !this.reverseCard
           
            setTimeout(() => {
                card.rev = false
                this.reverseCard=false
            }, 3000);
            return
        },

        text(card) {
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
        // this.cards.forEach(el => {
        //     el.rev=false
        // });
        //сортировака 3х массивов
    }
})  