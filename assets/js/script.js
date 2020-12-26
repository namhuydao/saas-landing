//Window onload
$(window).on('load', function(event) {
  $('.onload').delay(1000).fadeOut('fast');
});

//Header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = document.getElementsByClassName("header")[0];
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 
    || window.pageYOffset > 10) {
    x.classList.add("sticky");
  } else {
    x.classList.remove("sticky");
  }
  var y = document.getElementById("scrollUp");
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000
    || window.pageYOffset > 1000) {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

function menuOpen() {
  var x = document.getElementsByClassName("header__menu-list")[0];
  if (x.style.left === "-320px") {
    x.style.left = "0px";
  } else{
    x.style.left = "-320px";
  }
}

function menuClose() {
  var x = document.getElementsByClassName("header__menu-list")[0];
  if (x.style.left === "-320px") {
    x.style.left = "0px";
  } else{
    x.style.left = "-320px";
  }
}

let trigger = document.querySelectorAll('.trigger')
trigger.forEach(function(item){
  item.addEventListener('click', function(){  
    this.previousElementSibling.classList.toggle('show')
    this.classList.toggle('active')
  })
})

//Completed Project
//===== Number Auto Run =====/
const counters = document.querySelectorAll(".counters");
const speed = 30; // The lower the slower
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    // Lower inc to slow and higher to slow
    const inc = target / speed;
    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 100);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

//Banner
var _CONTENT = [ 
	"sass", 
	"pug", 
	"node js", 
  "jquery",
  "bootstrap 5",
  "gulp js",
  
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#words-wrapper");


// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 500);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

//Question
$(document).ready(function() {
  $(".header__content > .button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      } else {
        $(".header__content > .button").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
        .siblings(".content")
        .slideDown(200);
      }
  });
}); 

//Partner
$(function() {
  // Owl Carousel
  var owl = $("#partnerTop");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots:false,
    responsiveClass:true,
    autoplay: true,
    responsive:{
      0:{
        items:2,
        nav:false
        },
      480:{
        items:3,
        nav:false
        },
      768:{
        items:4,
        nav:false
        },
      992:{
        items:5,
        nav:false
      },
      1200:{
        items:6,
        nav:false
      }
    }
  });
});


$(function() {
  // Owl Carousel
  var owl = $("#partnerBottom");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    responsiveClass:true,
    dots:false,
    autoplay: true,
    responsive:{
      0:{
        items:2,
        nav:false
        },
      480:{
        items:3, 
        nav:false
        },
      768:{
        items:4,
        nav:false
        },
      992:{
        items:5,
        nav:false
      },
      1200:{
        items:6,
        nav:false
      }
    }
  });
});


//cookies
function cookieClose() {
  var x = document.getElementsByClassName("cookiealert")[0];
  x.style.opacity = "0";
  x.style.visibility = "hidden";
}

//Footer language
function languageOpen(){
  var x = document.getElementsByClassName("language__dropdown")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Back To Top
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

