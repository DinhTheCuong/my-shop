const productsSheft = document.querySelector('.products-sheft');

const renderProducts = {
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
            name: 'áo vest dạ đỏ',
            img: '../img/products/ao_2.jpg',
            // path:
            price: 80,
        },
        {
            id: 3,
            name: 'áo khoác kẻ nâu',
            img: '../img/products/ao_3.jpg',
            // path:
            price: 100,
        },
        {
            id: 4,
            name: 'đầm liền thiết kế',
            img: '../img/products/ao_4.jpg',
            // path:
            price: 120,
        },
        {
            id: 5,
            name: 'quần baggy hồng',
            img: '../img/products/ao_5.jpg',
            // path:
            price: 50,
        },
        {
            id: 6,
            name: 'quần culottes đen',
            img: '../img/products/ao_6.jpg',
            // path:
            price: 80,
        },
        {
            id: 7,
            name: 'đầm đỏ thiết kế',
            img: '../img/products/ao_7.jpg',
            // path:
            price: 100,
        },
        {
            id: 8,
            name: 'đầm tiệc nhung',
            img: '../img/products/ao_8.jpg',
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

renderProducts.start();