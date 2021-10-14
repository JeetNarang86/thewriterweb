const Responsive = {
  320: {
    items: 1,
    nav: true,
  },

  560: {
    items: 2,
    nav: true,
  },

  960: {
    items: 3,
    nav: true,
  },
};

$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  /**click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  //owl-carousel for blog

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    ResponsiveClass: true,
  });

  // click to scroll up

  $(".move-up span").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
