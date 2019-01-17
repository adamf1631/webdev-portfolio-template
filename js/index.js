
	
    skills = ['HTML5/CSS 3 Deisgn', 'JavaScript/jQuery to add Functionality', 'CSS/Javascript Framworks & Libraries', 'CSS PreProccessing (SASS)', 'Version Control/GitHub', 'Responsive Design','React JS', 'WordPress Design and E-Commerce', 'Testing/Debugging', 'Node JS','PHP 7','MySQL & Database Structure and queries'];

	var i = 0;  // the index of the current item to show

	setInterval(function() {            // setInterval makes it run repeatedly
    document
        .getElementById('skills')
        .innerHTML = skills[i++];    // get the item and increment
    if (i == skills.length) i = 0;   // reset to first element if you've reached the end
	}, 3000); 


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict