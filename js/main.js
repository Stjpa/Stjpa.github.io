!function(a){"use strict";var e=a("body");function o(){var e=a("#page-ajax-loaded");function o(){e.removeClass("fadeOutLeft closed"),e.show(),a("body").addClass("ajax-page-visible")}var t=a(".ajax-page-load").each(function(){if(t=a(this).attr("href"),location.hash==location.hash.split("/")[0]+"/"+t.substr(0,t.length-5)){var i=a(this).attr("href");return o(),e.load(i),!1}});a(document).on("click","#ajax-page-close-button",function(o){o.preventDefault(),a("#page-ajax-loaded").addClass("fadeOutLeft closed"),a("body").removeClass("ajax-page-visible"),setTimeout(function(){a("#page-ajax-loaded.closed").html(""),e.hide()},500),location.hash=location.hash.split("/")[0]}).on("click",".ajax-page-load",function(){var e=location.hash.split("/")[0]+"/"+a(this).attr("href").substr(0,a(this).attr("href").length-5);return location.hash=e,o(),!1})}function t(){a(e).scrollTop()>150?a(".lmpixels-scroll-to-top").removeClass("hidden-btn"):a(".lmpixels-scroll-to-top").addClass("hidden-btn")}a(window).on("load",function(){var e,o,t;a(".preloader").fadeOut(800,"linear"),e=a(window).width(),o="",t=a("#page_container").attr("data-animation"),(o=e>991?a(".page-container"):a(".site-main")).addClass("animated "+t),a(".page-scroll").addClass("add-prespective"),o.addClass("transform3d"),setTimeout(function(){a(".page-scroll").removeClass("add-prespective"),o.removeClass("transform3d")},1e3)}).on("hashchange",function(a){location.hash&&o()}),a(document).ready(function(){var i=15/a(document).height(),s=15/a(document).width();a("body").on("mousemove",function(e){var o=e.pageX-a(document).width()/2,t=e.pageY-a(document).height()/2;if(a(".page-container").hasClass("bg-move-effect"))var l=a(".home-photo .hp-inner:not(.without-move), .lm-animated-bg");else var l=a(".home-photo .hp-inner:not(.without-move)");l.addClass("transition"),l.css({"background-position":"calc( 50% + "+-(s*o*1)+"px ) calc( 50% + "+-(i*t*1)+"px )"}),setTimeout(function(){l.removeClass("transition")},300)}).scroll(function(){t()});var l=a(".portfolio-grid"),n=a("#portfolio-gallery-grid");n.imagesLoaded(function(){n.masonry()}),l.imagesLoaded(function(){a(".portfolio-content").each(function(){a(this);var e=a(this).attr("id"),o=a("#"+e+" .portfolio-grid"),t=a("#"+e+" .portfolio-filters"),i=a("#"+e+" .portfolio-filters .filter");o&&(a(".site-auto-menu").on("click","a",function(a){o.shuffle("update")}),t.on("click",".filter",function(e){o.shuffle("update"),e.preventDefault(),i.parent().removeClass("active"),a(this).parent().addClass("active"),o.shuffle("shuffle",a(this).attr("data-group"))}))})}),a(".portfolio-page-carousel").each(function(){a(this).imagesLoaded(function(){a(".portfolio-page-carousel").owlCarousel({smartSpeed:1200,items:1,loop:!0,dots:!0,nav:!0,navText:!1,autoHeight:!0,margin:10})})});var r,d=a(".blog-masonry");d.imagesLoaded(function(){d.masonry({itemSelector:".item",resize:!1})}),a(".menu-toggle").on("click",function(){a(".site-nav").addClass("animate"),a(".site-nav").toggleClass("mobile-menu-hide")}),a(".text-rotation").owlCarousel({loop:!0,dots:!1,nav:!1,margin:10,items:1,autoplay:!0,autoplayHoverPause:!1,autoplayTimeout:3800,animateOut:"fadeOut",animateIn:"fadeIn"}),a(".testimonials.owl-carousel").owlCarousel({nav:!1,items:3,loop:!1,navText:!1,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}}),a(".clients.owl-carousel").imagesLoaded().owlCarousel({nav:!1,items:2,loop:!1,navText:!1,margin:10,autoHeight:!1,responsive:{0:{items:2},768:{items:4},1200:{items:6}}}),e.magnificPopup({fixedContentPos:!1,delegate:"a.lightbox",type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title",gallery:{enabled:!0}},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:null,src:"%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(a,e,o){e.title=o.el.attr("title")}}}),a(".ajax-page-load-link").magnificPopup({type:"ajax",removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!0}}),a(".portfolio-page-wrapper .portfolio-grid").each(function(){a(this).magnificPopup({delegate:"a.gallery-lightbox",type:"image",gallery:{enabled:!0}})}),a(".form-control").val(""),a(".form-control").on("focusin",function(){a(this).parent(".form-group").addClass("form-group-focus")}),a(".form-control").on("focusout",function(){0===a(this).val().length&&a(this).parent(".form-group").removeClass("form-group-focus")}),a("body").append('<div id="page-ajax-loaded" class="page-portfolio-loaded animated fadeInLeft" style="display: none"><div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>'),o(),a(".sidebar-toggle").on("click",function(){a("#blog-sidebar").toggleClass("open"),a(this).toggleClass("open")}),a(".lmpixels-scroll-to-top").click(function(){return a("body,html").animate({scrollTop:0},400),!1}),t(),r="",a(".skill-container").each(function(){var e=a(this).attr("data-value");e>=101&&(e="100"),void 0!==e&&(r+="#"+a(this).attr("id")+" .skill-percentage { width: "+e+"%; } ")}),a("head").append('<style data-styles="leven-theme-skills-css" type="text/css">'+r+"</style>")})}(jQuery);