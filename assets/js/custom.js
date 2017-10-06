
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US

    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS
            ======================================*/


            window.scrollReveal = new scrollReveal();

        },
         scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS
                ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },

         top_flex_slider_fun:function()
         {
             /*====================================
              FLEX SLIDER SCRIPTS
             ======================================*/
             $('#main-section').flexslider({
                 animation: "fade", //String: Select your animation type, "fade" or "slide"
                 slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                 animationSpeed: 1000,           //Integer: Set the speed of animations, in milliseconds
                 startAt: 0,    //Integer: The slide that the slider should start on. Array notation (0 = first slide)

             });
         },

        custom_fun:function()
        {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/




        },

    }


    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();
    });
}(jQuery));

$(document).ready(function () {

    $(".next-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.nav-tabs li.active');
        prevTab($active);

    });
});
function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}


$(document).ready(function(){

$(function(){

    $(document).on( 'scroll', function(){

    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});

	$('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});




(function($) {

	var tabs =  $(".tabs li a");

	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    $("#content").find('p').hide();
    $(content).fadeIn(200);
	});

})(jQuery);


/* pop up enquiry java*/
$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 150) {
    $("#popUp").css("margin-left", "-425px");
    $("#plus").css("margin-left", "0px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "0px");
  $("#plus").css("margin-left", "-425px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-425px");
  $("#plus").css("margin-left", "0px");
});

/* LOADING  */
// The elements that are the to be used for the asset
var assetElems = document.querySelectorAll(".ale"),
    urlCreator = window.URL || window.webkitURL; // For URL creator usage later

// Add the asset loading effect for each element
[].forEach.call(assetElems, loadAsset);

// Load the asset in the way specified by the data attribute
function loadAsset(elem) {
    // Determine which loader to create
    var progressBarElem = getProgressBarElem(),
        isVid = elem.getAttribute("data-ale-isVid") != undefined ? elem.getAttribute("data-ale-isVid") : false,
        assetLoc = elem.getAttribute("data-ale-src");

    // Load the asset via XHR so that we can track the progress
    var req = new XMLHttpRequest();
    // Attach the finished load listener
    req.onload = loadFinished;
    // Attach the progress listener
    req.onprogress = loading;
    // Actually make the request
    req.open('GET', assetLoc, true);
    req.responseType = 'blob'; // This must be after the open - FF can't handle do it before https://bugzilla.mozilla.org/show_bug.cgi?id=1110761
    req.send();

    // Determine which progress bar to use given the data attribute and return it
    function getProgressBarElem() {
        var type = elem.getAttribute("data-ale-type");

        // Choose the progress bar type based on the lil-type
        if(type !== "diagonal") {
            console.log("A diagonal type was not given! Creating one anyway");
        } else {
            var line = new ProgressBar.Line(elem);

            // Fix an IE issue
            line.svg.setAttribute("preserveAspectRatio", "xMinYMid");

            return line;
        }
    }

    // Update the progress bar with the current value
    function loading(evt) {
        if (evt.lengthComputable) {
            // ProgressBar.js animates using 0.0-1.0 as a range, so we need the progress in terms of that
            progressBarElem.animate(evt.loaded / evt.total);
        }
    }

    // Remove the loader when it's done and show the image
    function loadFinished() {
        // Currently, if it's not a video it's an image
        if(!isVid) {
            // Create a URL for the given response
            var imgUrl = urlCreator.createObjectURL(req.response);
            // Set that URL as the background of the element given
            elem.style.backgroundImage = 'url(' + imgUrl + ')';
        } else {
            var video = document.createElement('video');
            video.controls = true;
            video.src = urlCreator.createObjectURL(req.response);
            elem.appendChild(video); // Append the video since we can't do a background-video
        }

        // Finish the animation
        progressBarElem.animate(1, function () {
            // Add the "complete" class to show it's done
            elem.classList.add("complete");
        });
    }
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
