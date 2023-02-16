const blogsSheft = document.querySelector('.blog-sheft');

const renderBlogs = {
    currentIndex: 0,

    blogs: [
        {
            id: 1,
            title: 'suit - xu hướng thời trang cho quý cô quyền lực',
            img: '../img/blogs/blog1.jpg',
            // path:
        },
        {
            id: 2,
            title: 'rạng rỡ đón hè cùng váy hoa',
            img: '../img/blogs/blog2.jpg',
            // path:
        },
        {
            id: 3,
            title: 'summer festival - áo phông chỉ từ 299k',
            img: '../img/blogs/blog3.jpg',
            // path:
        },
        {
            id: 4,
            title: 'ấn tượng cùng đầm thắt nơ',
            img: '../img/blogs/blog4.jpg',
            // path:
        },
        {
            id: 5,
            title: 'tự tin khoe dáng với đần suông',
            img: '../img/blogs/blog5.jpg',
            // path:
        },
        {
            id: 6,
            title: 'gợi ý mix & match trang phục công sở',
            img: '../img/blogs/blog2.jpg',
            // path:
        }
    ],

    render: function() {
        const htmls = this.blogs.map((blog, index) => {
            return `
            <div class="blog-card">
            <a href="" class="blog-link">
              <img src="${blog.img}" alt="" class="blog-image">
    
              <p class="blog-title">${blog.title}</p>
            </a>
          </div>
            `
        })
        blogsSheft.innerHTML = htmls.join('')
    },

    start: function() {
        this.render()
    }
}

renderBlogs.start();