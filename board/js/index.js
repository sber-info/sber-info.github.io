let app = new Vue({
    el: '#app',
    data: {
        reverseCard: false,
        cards: null,
        err: '',
        id: 1,
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
                    
                    this.cards.forEach(el => {
                        el.id=this.id++
                        console.log(el.id)
                    });
            }
            catch {
                this.err = error
            }
        },

        translate(card) {
            Vue.set(card, 'rev', !card.rev)
            this.cards.push(card)
            this.cards.pop(card)
            setTimeout(() => {
                card.rev = false
            }, 3000);
            return
        },

        rev(card) {
            return card.rev ? card.translation : card.sourceText
        },

        hoverOn (card) {
        //    document.getElementById(card.id).style.transform='scale(1.1)'

           document.getElementById(card.id).style.cssText="transform: scale(1.1); transition: .5s;"
        },

        hoverOf (card) {
            document.getElementById(card.id).style.transform='scale(1)'
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
    },
})  