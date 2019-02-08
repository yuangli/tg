// // Button hovered animations
// var navbar = document.getElementsByClassName('l-navbar');
// var box = document.getElementsByClassName('c-box__image');

// console.log(navbar);

// for (var i = 0 ; i < box.length; i++) {
//   box[i].addEventListener('mouseenter' , animation1) ; 
//   box[i].addEventListener('mouseout' , noanimation1) ; 
// }

// function animation1(){
//   console.log('hi');
//   navbar[0].classList.toggle('l-navbar');

// }
// function noanimation1(){
//   console.log('hello');
// 	navbar[0].classList.add('l-navbar--hidden');
// }


var navbar = document.getElementsByClassName('l-navbar');
var box = document.getElementsByClassName('c-box__image');

for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('mouseenter', animation1);
  box[i].addEventListener('mouseout', noanimation1);
}

function animation1() {
  $(navbar[0]).css({ "top": "-10rem" });

}
function noanimation1() {
  $(navbar[0]).css({ "top": "0rem" });
}




$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var images = document.getElementsByClassName('c-box__image');
var boxes = document.getElementsByClassName('c-box');

for (i = 0; i < images.length; i++) {
  image = images[i];
  image.addEventListener('mouseover', hovered);
}

for (i = 0; i < boxes.length; i++) {
  box = boxes[i];
  box.addEventListener('mouseleave', nohovered);
  // console.log(box);
}

function hovered() {
  this.classList.add('js-is-hovered');
  this.classList.remove('js-is-nohovered');
}
function nohovered() {
  this.children[0].classList.remove('js-is-hovered');
  this.children[0].classList.add('js-is-nohovered');
}

// var uiux = [document.getElementById("eoko"), document.getElementById("busbuddy"), document.getElementById("schmearit"), document.getElementById("branding"), document.getElementById("wp"), document.getElementById("si")];
// var graphic = [document.getElementById("eoko"), document.getElementById("branding"), document.getElementById("michelangelo"), document.getElementById("si")];
// var dev = [document.getElementById("eoko"), document.getElementById("busbuddy"), document.getElementById("branding"), document.getElementById("wp"), document.getElementById("michelangelo"), document.getElementById("recipes"), document.getElementById("coachella")];


var uiux = [document.getElementById("eoko"), document.getElementById("schmearit"), document.getElementById("branding"), document.getElementById("wp"), document.getElementById("si")];
var graphic = [document.getElementById("eoko"), document.getElementById("branding"), document.getElementById("michelangelo"), document.getElementById("si")];
var dev = [document.getElementById("eoko"), document.getElementById("branding"), document.getElementById("wp"), document.getElementById("michelangelo"), document.getElementById("recipes"), document.getElementById("coachella")];

function filtout(event) {
  if (event == uiux) {
    console.log('ui/ux');
    var filter = graphic.concat(dev);
    for (i = 0; i < filter.length; i++) {
      console.log(filter[i]);
      filter[i].style = "height:0; margin: 0 auto;";
      // filter[i].classList.add('animated', 'fadeOut');
    }
    for (i = 0; i < uiux.length; i++) {
      console.log(uiux[i]);
      uiux[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
    }
  }

  if (event == graphic) {
    console.log('graphic');
    var filter = uiux.concat(dev);
    for (i = 0; i < filter.length; i++) {
      console.log(filter[i]);
      filter[i].style = "height:0; margin: 0 auto;";
    }
    for (i = 0; i < graphic.length; i++) {
      console.log(graphic[i]);
      graphic[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
    }
  }

  if (event == dev) {
    console.log('graphic');
    var filter = uiux.concat(graphic);
    for (i = 0; i < filter.length; i++) {
      console.log(filter[i]);
      filter[i].style = "height:0; margin: 0 auto;";
    }
    for (i = 0; i < dev.length; i++) {
      console.log(dev[i]);
      dev[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
    }
  }
};

function filterReset(){
  console.log('all');
  for (i = 0; i < uiux.length; i++) {
    console.log(uiux[i]);
    uiux[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
  }
  for (i = 0; i < graphic.length; i++) {
    console.log(graphic[i]);
    graphic[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
  }
  for (i = 0; i < dev.length; i++) {
    console.log(dev[i]);
    dev[i].style = "height: 25vh; margin: 5rem auto 0 auto;";
  }
};

// /*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
// $(document).ready(function() {

//     //window and animation items
//     var animation_elements = $.find('.animation-element');
//     var web_window = $(window);

//     //check to see if any animation containers are currently in view
//     function check_if_in_view() {
//       //get current window information
//       var window_height = web_window.height();
//       var window_top_position = web_window.scrollTop();
//       var window_bottom_position = (window_top_position + window_height);

//       //iterate through elements to see if its in view
//       $.each(animation_elements, function() {

//         //get the element sinformation
//         var element = $(this);
//         var element_height = $(element).outerHeight();
//         var element_top_position = $(element).offset().top;
//         var element_bottom_position = (element_top_position + element_height);

//         //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
//         if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
//           element.addClass('in-view');
//         } else {
//           element.removeClass('in-view');
//         }
//       });

//     }

//     //on or scroll, detect elements in view
//     $(window).on('scroll resize', function() {
//         check_if_in_view()
//       })
//       //trigger our scroll event on initial load
//     $(window).trigger('scroll');

//   });