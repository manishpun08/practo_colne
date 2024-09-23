// //for loader
// window.addEventListener("load", () =>{
//     const loader = document.querySelector(".loader"); //selecting loader class


//     //loader.classList.add("loader-hidden"); //hiding loader and showing loader-hidden


//     loader.addEventListener("transitionend", ()=>{  //giving transition
//         document.body.removeChild("loader"); //removing loader class
//     })
// });

// $(window).on( "load", function() {
//     $("body").removeClass("noscroll");
// } );

var nav = $(".sticky_banner");
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        nav.css('display', 'block');
    } else {
        nav.css('display', 'none');
    }
});
$(window).on("load",function(){
    $(".loader").fadeOut("slow");
    $("body").removeClass("noscroll");
    $('sticky_banner').css('display', 'block');
});