let app = new Vue({
    el: '#app',
    data: {
        trigger: false,
        cards: null,
        err: '',
        id: 1,
        colors: ['#e1e1e1', '#36f8c7', '#36ecf8', '#f33162', '#ffff3c'],
        column1: [],
        column2: [],
        column3: [],
        newTheme: '',
        newEnText: '',
        newRuText: '',
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
                this.sortCards()
            } catch {
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
            let col = document.getElementById(card.id).parentElement.parentElement.id
            if (confirm('Удалить карточку?')) {
                switch (col) {
                    case 'col1':
                        this.column1.splice(this.column1.indexOf(card), 1)
                        break
                    case 'col2':
                        this.column2.splice(this.column2.indexOf(card), 1)
                        break
                    case 'col3':
                        this.column3.splice(this.column3.indexOf(card), 1)
                        break
                }
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
                let r = Math.floor(Math.random() * 3 + 1)
                switch (r) {
                    case 1:
                        this.column1.push(el)
                        break
                    case 2:
                        this.column2.push(el)
                        break
                    case 3:
                        this.column3.push(el)
                        break
                }
            });
        },

        sortCards() {
            this.column1.sort((a, b) => {
                if (a.sourceText.split(' ').length - 1 > b.sourceText.split(' ').length - 1) {
                    return -1;
                }
                if (a.sourceText.split(' ').length - 1 < b.sourceText.split(' ').length - 1) {
                    return 1;
                }

                return 0;
            });
            this.column2.sort((a, b) => {
                if (a.sourceText.split(' ').length - 1 > b.sourceText.split(' ').length - 1) {
                    return -1;
                }
                if (a.sourceText.split(' ').length - 1 < b.sourceText.split(' ').length - 1) {
                    return 1;
                }

                return 0;
            });
            this.column3.sort((a, b) => {
                if (a.sourceText.split(' ').length - 1 > b.sourceText.split(' ').length - 1) {
                    return -1;
                }
                if (a.sourceText.split(' ').length - 1 < b.sourceText.split(' ').length - 1) {
                    return 1;
                }

                return 0;
            });
        },

        createCard() {
            if (this.newTheme != '') {
                let newCard = {
                    'theme': this.newTheme,
                    'sourceText': this.newEnText,
                    'translation': this.newRuText,
                };
                this.cards.push(newCard)
            }

        }
    },

    async mounted() {
        await this.getData()

    }

})