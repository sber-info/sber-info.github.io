let app = new Vue({
    el: '#app',
    data: {
        reverseCard: false,
        cards: null,
        err: '',
        id: 1,
        colors: ['#e1e1e1', '#36f8c7', '#36ecf8', '#f33162', '#ffff3c'],
        column1: [],
        column2: [],
        column3: [],
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

                this.addId()
                this.addRandomColor()
                this.contenColums()

            }
            catch {
                this.err = error
            }
        },

        addId() {
            this.cards.forEach(el => {
                el.id = this.id++
            });
        },

        addRandomColor() {
            this.cards.forEach(el => {
                el.color = this.colors[Math.floor(Math.random() * this.colors.length)]
            });

        },

        translate(card) {
            this.$set(card, 'rev', !card.rev)
            this.cards.push(card)
            this.cards.pop(card)
            setTimeout(() => {
                card.rev = false
            }, 3000);
            return
        },

        removeCard(card) {
            console.log(document.querySelector(`#${card.id}`.innerText))
            if (confirm('Удалить карточку?')) {
                this.cards.splice(this.cards.indexOf(card), 1)
            }
        },

        rev(card) {
            return card.rev ? card.translation : card.sourceText
        },

        hoverOn(card) {
            document.getElementById(card.id).style.cssText = "transform: scale(1.1); transition: .5s;"
        },

        hoverOf(card) {
            document.getElementById(card.id).style.transform = 'scale(1)'
        },

        contenColums() {
            this.cards.forEach(el => {
                let r = Math.floor(Math.random() * 3+1)
                switch (r) {
                    case 1: this.column1.push(el)
                        break
                    case 2: this.column2.push(el)
                        break
                    case 3: this.column3.push(el)
                        break
                }
                // this.column.push(el)
            });
        }

    },

    async mounted() {
        await this.getData()
    }

})  