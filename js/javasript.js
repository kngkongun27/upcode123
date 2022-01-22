




const menuDetail = document.querySelector(".home-filter");
menuDetail.addEventListener("click", function(x) {
    if ( x.target.classList.contains("home-filter__btn")) {
        const Gets = x.target.getAttribute("data-title");
        menuDetail.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");
        const menuList = document.querySelector(".app__container");
        menuList.querySelector(".home-product.active").classList.remove("active");
        menuList.querySelector(Gets).classList.add("active")
    }
})

// Scroll 
 window.addEventListener("scroll", function() {
     const x = this.pageYOffset;
    if ( x > 180) {
         this.document.querySelector(".box__support").classList.add('active')
     } else {
         this.document.querySelector(".box__support").classList.remove('active')
     }
 })
// profile active
const list = document.querySelectorAll('.list');
    function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click',activeLink));

// user-list 











 

