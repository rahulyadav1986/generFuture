
$('.mobile_menu').slicknav({
    label: '',
    prependTo: 'header .menu_area',
    closedSymbol: '+',
    openedSymbol: '-',
    allowParentLinks:"true",
});

/* On Scroll Js */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var header= document.getElementById("header")
    header.classList.add('active');
  } else {
    var header= document.getElementById("header")
    header.classList.remove('active');
  }
}
/* On Scroll Js */


var owl = $('#brand-slider');
owl.owlCarousel({
     loop: true,
     dots: true,
     nav:false,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 0,
     responsive:{
         0:{
             items: 2,
             margin: 30
         },
         600:{
             items: 3
         },
         1000:{
             items: 4
         },
         1366:{
             items: 5
         }
     }
 });

var owlTesti = $('#testimonial-slider');
owlTesti.owlCarousel({
     loop: true,
     dots: true,
     nav:false,
     navText: [
         ("<img src='images/ar1.png' />"),
         ("<img src='images/ar2.png' />")
     ],
     autoplay:true,
     center:false,
     margin: 96,
     responsive:{
         0:{
             items: 1
         },

         600:{
             items: 1
         },
         1023:{
            items: 1
        },
         1000:{
             items: 2,
             margin: 30,
         },
         1366:{
             items: 2,
             margin: 40,
         }
     }
 });


var owlBlog = $('#blog-slider');
owlBlog.owlCarousel({
     loop: false,
     dots: false,
     nav:true,
     navText: [
         ("<img src='images/ar2.png' />"),
         ("<img src='images/ar1.png' />")
     ],
     autoplay:true,
     center:false,
     responsive:{
         0:{
             items: 1
         },

         600:{
             items: 2
         },
         1023:{
            items: 2
        },
         1000:{
             items: 3
         },
         1366:{
             items: 4
         }
     }
 });


/*Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
      display: [
        { id: "prev", position: "center" },
        { id: "counter", position: "center" },
        { id: "next", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "thumbs",
        "close",
      ],
    },
  });*/



