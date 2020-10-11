document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    class Cards {
        constructor(price, header, parent, classes, popular, classPop, grid) {
            this.price = price;
            this.header = header;
            this.parent = document.querySelector(parent);
            this.classes = classes;
            this.popular = popular;
            this.classPop = classPop;
            this.grid = grid;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add(this.classes, this.grid);

            element.innerHTML = `
                        <div class="card__title">
                            <p>${this.header}</p>
                        </div>
                        <div class="card__price">
                            <p><span>$</span>${this.price}</p>
                            <p>Free for Life</p>
                        </div>
                        <div class="${this.classPop}">
                                ${this.popular}
                        </div>
                        <div class="card__description">
                            <p>1 gb of space</p>
                            <p>10 gb of bandwidth</p>
                            <p>3 websites</p>
                            <p>Basic Customization</p>
                            <p>wordpress integration</p>
                            <p>email support</p>
                        </div>
            `;

            this.parent.append(element);
        }
    }

    new Cards(
        '0',
        'Basic',
        '.block__cards',
        'block__card-one',
        '',
        'card__mostpopular-one',
        'one__for-grid'
    ).render();

    new Cards(
        '19',
        'Professional',
        '.block__cards',
        'block__card-two',
        '<p>OUR MOST POPULAR</p>',
        'card__mostpopular-two',
        'two__for-grid',
    ).render();

    new Cards(
        '70',
        'Enterprise',
        '.block__cards',
        'block__card-one',
        '',
        'card__mostpopular-one',
        'three__for-grid'
    ).render();
})
