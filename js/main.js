$(document).ready(function(){
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse')

    /**click event on toggle menu */
    $togglecollapse.click(function(){
        $nav.toggleclass('.collapse');
    })

    //owl-carousel for blog
    $('.owl-carousel').owlCarousel();

});