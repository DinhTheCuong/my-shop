const productsSheft = document.querySelector('.products-sheft');

const app = {
    currentIndex: 0,

    products: [
        {
            id: 1,
            name: 'đầm tiệc trễ vai',
            img: '../img/products/ao_1.jpg',
            // path:
            price: 50,
        },
        {
            id: 2,
            name: 'áo dài tay',
            img: '../img/products/ao_2.jpg',
            // path:
            price: 80,
        },
        {
            id: 3,
            name: 'áo len',
            img: '../img/products/ao_3.jpg',
            // path:
            price: 100,
        },
        {
            id: 4,
            name: 'áo khoác',
            img: '../img/products/ao_4.jpg',
            // path:
            price: 120,
        },
        {
            id: 1,
            name: 'đầm tiệc trễ vai',
            img: '../img/products/ao_1.jpg',
            // path:
            price: 50,
        },
        {
            id: 2,
            name: 'áo dài tay',
            img: '../img/products/ao_2.jpg',
            // path:
            price: 80,
        },
        {
            id: 3,
            name: 'áo len',
            img: '../img/products/ao_3.jpg',
            // path:
            price: 100,
        },
        {
            id: 4,
            name: 'áo khoác',
            img: '../img/products/ao_4.jpg',
            // path:
            price: 120,
        }
    ],

    render: function() {
        const htmls = this.products.map((product, index) => {
            return `
                <div class="product-card">
                    <a class="product-link" href="">
                        <img class="product-image" src="${product.img}" alt="">
                        
                        
                        <p class="product-name">${product.name} <span>${product.id}</span></p>
                        <p class="product-price"><span>${product.price}</span> ₫</p>
                    </a>
                </div>
            `
        })
        productsSheft.innerHTML = htmls.join('')
    },

    start: function() {
        this.render()
    }
}

app.start();