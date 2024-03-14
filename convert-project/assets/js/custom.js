$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap
    margin: 30, //Khoang cach giua item
    nav: false, //Thanh dieu huong (Mui ten)
    dots: false, //Dieu huong (Dau cham tron)
    autoplay: true, //tu dong chuyen slider
    autoplayTimeout: 4000, //Thoi chuyen slider (ms)

    responsive: { //Quy dinh SLSP tren cac man hinh
      0: { // -> 599px
        items: 1
      },
      600: { //600px -> 999px
        items: 1
      },
      1000: {//1000px -> 1499px
        items: 1
      },
      1500: {//1500px tro len
        items: 1
      }
    }
  })

});
