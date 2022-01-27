$(function(){
    'use strict';
    var winh = $(window).height();
    var navh =  $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winh - navh);
});