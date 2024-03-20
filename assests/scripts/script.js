
// function applyShakeEffect() {

//   $("#shake-effect").addClass("scale", function () {
//     $("#shake-effect").effect("shake", function () {
//       $("#shake-effect").removeClass("scale");
//     });

//   });
// }

// applyShakeEffect();

// setInterval(applyShakeEffect, 1500);

function applyScaleEffect() {
  $("#shake-effect").addClass("scale");
}

function removeScaleEffect() {
  $("#shake-effect").removeClass("scale");
}

setInterval(applyScaleEffect, 1500);
setInterval(removeScaleEffect, 2500);


let backToTop = false;

$(document).on("scroll", scrollHandler);

function scrollHandler() {

  var tags = $(".opacity-0")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).offset().top - $(document).scrollTop() < 350) {
      $(tag).addClass("fade-in");
      $(tag).removeClass("opacity-0");
    }
  }

  if ($("#about-section").offset().top - $(document).scrollTop() < 500)
    backToTop = true;
  else {
    backToTop = false;
  }

  if (backToTop == true) {
    $(".back-to-top-btn").removeClass("d-none");
  }
  else {
    $(".back-to-top-btn").addClass("d-none");

  }
}

$(".blog-share-button").on("mouseenter", function () {

  $($(this.children[0])).addClass("btn-share-effect");
  $($(this.children[1])).removeClass("d-none");
  $($(this.children[1])).addClass("d-flex slide-share-icons");

});

$(".blog-share-button").on("mouseleave", function () {

  $($(this.children[0])).removeClass("btn-share-effect");
  $($(this.children[1])).addClass("d-none");
  $($(this.children[1])).removeClass("slide-share-icons");

});

$(".dropdown").on("mouseenter", function () {

  $($(this.children[0])).addClass("show");
  $($(this.children[1])).slideDown("slow");
});

$(".dropdown").on("mouseleave", function () {

  $($(this.children[0])).removeClass("show");
  $($(this.children[1])).slideUp();
});



// const teamItems = $(".team-item");

// $(".team-carousel-control-left").on("click",function(){

//   $($(".team-item")[teamID]).addClass("move-back");
//   $($(".team-item")[(teamID + 1) % 4]).addClass("move-back");
//   $($(".team-item")[(teamID + 2) % 4]).addClass("move-back");
//   $($(".team-item")[(teamID + 3) % 4]).addClass("move-back");

//   setTimeout(function () {


//     $($(".team-item")[teamID]).removeClass("move-back");
//     $($(".team-item")[(teamID + 1) % 4]).removeClass("move-back");
//     $($(".team-item")[(teamID + 2) % 4]).removeClass("move-back");
//     $($(".team-item")[(teamID + 3) % 4]).removeClass("move-back");

//     orderChanger(".team-item");

//   }, 3000);
// });

// $(".team-carousel-control-right").on("click",function(){

//   $($(".team-item")[teamID]).addClass("move-forward");
//   $($(".team-item")[(teamID + 1) % 4]).addClass("move-forward");
//   $($(".team-item")[(teamID + 2) % 4]).addClass("move-forward");
//   $($(".team-item")[(teamID + 3) % 4]).addClass("move-forward");

//   setTimeout(function () {


//     $($(".team-item")[teamID]).removeClass("move-forward");
//     $($(".team-item")[(teamID + 1) % 4]).removeClass("move-forward");
//     $($(".team-item")[(teamID + 2) % 4]).removeClass("move-forward");
//     $($(".team-item")[(teamID + 3) % 4]).removeClass("move-forward");

//     orderChanger(".team-item");

//   }, 3000);
// });

// function teamScroll(teamID) {

//   $($(".team-item")[teamID]).addClass("move");
//   $($(".team-item")[(teamID + 1) % 4]).addClass("move");
//   $($(".team-item")[(teamID + 2) % 4]).addClass("move");
//   $($(".team-item")[(teamID + 3) % 4]).addClass("move");

//   // $(".team-carousel-container").addClass("move");


//   setTimeout(function () {


//     $($(".team-item")[teamID]).removeClass("move");
//     $($(".team-item")[(teamID + 1) % 4]).removeClass("move");
//     $($(".team-item")[(teamID + 2) % 4]).removeClass("move");
//     $($(".team-item")[(teamID + 3) % 4]).removeClass("move");

//     orderChanger(".team-item");

//   // $(".team-carousel-container").removeClass("move");
//   // $(".team-carousel-container").addClass("move-back");

//     // let i = teamID + 1;
//     // while (i != teamID) {
//     //   if ($($(".team-item")[i]).hasClass("d-none")) {
//     //     $($(".team-item")[i]).removeClass("d-none");
//     //     break;
//     //   }

//     //   if (i < 3) {
//     //     i++;
//     //   }
//     //   else {
//     //     i = 0;
//     //   }
//     // }

//   }, 3000);

//   setTimeout(function(){
//     if (teamID < 3) {
//       teamScroll(++teamID);
//     }
//     else {
//       teamScroll(0);
//     }
//   },4000);
// }

// // async function teamScroll(){
// //   $(".team-carousel-container").addClass("move");
// //   orderChanger();

// //   setTimeout(function(){
// //   $(".team-carousel-container").removeClass("move");

// //   teamScroll();
// //   },2100);


// // }

// // teamScroll();


// let teamID = 0;
// teamScroll(teamID);

$('.team-carousel-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".team-carousel-control-left"),
  nextArrow: $(".team-carousel-control-right"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// $(".team-carousel-control-left").on("click",function(){
//   $($(".team-item")[0]).addClass("move");
//   $($(".team-item")[1]).addClass("move");
//   $($(".team-item")[2]).addClass("move");

//   setTimeout(function(){

//     $($(".team-item")[0]).addClass("d-none");
//     $($(".team-item")[1]).removeClass("move");
//     $($(".team-item")[2]).removeClass("move");
//     $($(".team-item")[3]).removeClass("d-none");
//   },2000);

// });


// let indicatorClick = false;

// let testimonial = {
//   ID: 0
// }


$('.testimonial-carousel-container').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  dots: true,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode:true,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// const testimonialItems = $(".testimonial-item");
// // const testimonialCarouselIndicators = $(".testimonial-carousel-indicators");

// function testimonialScroll(testimonialID) {
//   // let modTestimonialID = testimonialID;

//   // if (testimonialID == 2) {
//   //   modTestimonialID = testimonialID - 1;
//   // }
//   // if (testimonialID == 3) {
//   //   modTestimonialID = testimonialID - 2;
//   // }

//   $($(".testimonial-carousel-indicators button")[testimonialID]).addClass("active");

//   $($(".testimonial-item")[(testimonialID + 2) % 4]).addClass("active"); // 4 is used because of the length of the testimonialItems or else we can use testimonialItems.length

//   $($(".testimonial-item")[testimonialID]).addClass("move");
//   $($(".testimonial-item")[(testimonialID + 1) % 4]).addClass("move");
//   $($(".testimonial-item")[(testimonialID + 2) % 4]).addClass("move");
//   $($(".testimonial-item")[(testimonialID + 3) % 4]).addClass("move");

//   setTimeout(function () {

//     $($(".testimonial-carousel-indicators button")[testimonialID]).removeClass("active");

//     $($(".testimonial-item")[testimonialID]).removeClass("move");
//     $($(".testimonial-item")[(testimonialID + 1) % 4]).removeClass("move");
//     $($(".testimonial-item")[(testimonialID + 2) % 4]).removeClass("active move");
//     $($(".testimonial-item")[(testimonialID + 3) % 4]).removeClass("move");

//     orderChanger(".testimonial-item");

//     // let i = testimonialID + 1;

//     // while (i != testimonialID) {
//     //   if ($($(".testimonial-item")[i]).hasClass("d-none")) {
//     //     $($(".testimonial-item")[i]).removeClass("d-none");
//     //     break;
//     //   }

//     //   if (i < 3) {
//     //     i++;
//     //   }
//     //   else {
//     //     i = 0;
//     //   }
//     // }

//   }, 3000);

//   setTimeout(function(){
//     if (testimonialID < 3 && indicatorClick==false) {
//       testimonialScroll(++testimonial.ID);
//     }
//     else {
//       if(indicatorClick==false){
//         testimonial.ID=0;
//         testimonialScroll(testimonial.ID);
//       }
//     }
//   },3050);

// }

// testimonialScroll(testimonial.ID);

// $($(".testimonial-carousel-indicators")[0]).on("click",function(){

//   indicatorClick=true;
//   $($(".testimonial-carousel-indicators button")[testimonial.ID]).removeClass("active");

//   testimonialScroll(0);

//  setTimeout(function(){
//   indicatorClick=false;
//   testimonialScroll(0);
//  },3150);
// });

// $($(".testimonial-carousel-indicators")[1]).on("click",function(){

//   indicatorClick=true;
//   $($(".testimonial-carousel-indicators button")[testimonial.ID]).removeClass("active");

//   testimonialScroll(1);


// });

// async function orderChanger(className) {

//   $(`${className}`).each(function () {

//     if ($(this).hasClass("order-0")) {
//       $(this).removeClass("order-0");
//       $(this).addClass("order-3");
//     }
//     else if ($(this).hasClass("order-1")) {
//       $(this).removeClass("order-1");
//       $(this).addClass("order-0");
//     }
//     else if ($(this).hasClass("order-2")) {
//       $(this).removeClass("order-2");
//       $(this).addClass("order-1");
//     }
//     else if ($(this).hasClass("order-3")) {
//       $(this).removeClass("order-3");
//       $(this).addClass("order-2");
//     }
//   });

//   return Promise.resolve("Go Ahead");
// }

