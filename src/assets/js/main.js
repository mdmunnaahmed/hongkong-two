"user strict";

// Preloader
$(window).on("load", function () {
	$(".preloader").fadeOut(1000);
});

// Menu Click Event
let trigger = $(".header-trigger");
let dropdown = $(".menu-sidebar");
if (trigger || dropdown) {
	trigger.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown.toggleClass("active");
			trigger.toggleClass("active");
			$(".overlay").toggleClass("active-color");
		});
	});
	dropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown.removeClass("active");
			trigger.removeClass("active");
			$(".overlay").removeClass("active-color");
		}
	});
}

// Menu Click Event
let trigger2 = $(".search-trigger");
let dropdown2 = $(".search-form");
if (trigger2 || dropdown2) {
	trigger2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown2.toggleClass("active");
			$(".overlay").toggleClass("active-color");
		});
	});
	dropdown2.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		if (parseInt(screenSize) < parseInt(991)) {
			dropdown2.removeClass("active");
			$(".overlay").removeClass("active-color");
		}
	});
}

$(".menu-close").on("click", function () {
	$(".menu").slideUp();
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});

$(".menu li a").on("click", function (e) {
	if (parseInt(screenSize) < parseInt(991)) {
		$(this).siblings(".sub-menu").slideToggle();
	}
});

// Sticky Menu
var header = document.querySelector(".header");
if (header) {
	window.addEventListener("scroll", function () {
		header.classList.toggle("sticky", window.scrollY > 0);
	});
}

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
	if ($(this).scrollTop() < 500) {
		scrollTop.removeClass("active");
	} else {
		scrollTop.addClass("active");
	}
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		300
	);
	return false;
});

$(".brand-slider").slick({
	fade: false,
	slidesToShow: 6,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	pauseOnHover: true,
	centerMode: false,
	dots: false,
	arrows: false,
	nextArrow: '<i class="las la-arrow-right arrow-right"></i>',
	prevArrow: '<i class="las la-arrow-left arrow-left"></i> ',
	responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});

// Odometer Counter
let counter = $(".counter-item");
if (counter) {
	counter.each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
}

// Shop Cart
$(".minus-plus").on("click", function () {
	var oldValue = $(this).siblings("input").val();
	if ($(this).hasClass("cart-plus")) {
		var newVal = parseFloat(oldValue) + 01;
	} else {
		if (oldValue > 1) {
			var newVal = parseFloat(oldValue) - 01;
		} else {
			newVal = 01;
		}
	}
	$(this).siblings("input").val(newVal);
});

//Faq
$(".faq-header").on("click", function (e) {
	var element = $(this).parent(".faq-item");
	if (element.hasClass("open")) {
		element.removeClass("open");
		element.find(".faq-item__content").removeClass("open");
		element.find(".faq-item__content").slideUp(300, "swing");
	} else {
		element.addClass("open");
		element.children(".faq-item__content").slideDown(300, "swing");
		element.siblings(".faq-item").children(".faq-item__content").slideUp(300, "swing");
		element.siblings(".faq-item").removeClass("open");
		element.siblings(".faq-item").find(".faq-item__content").slideUp(300, "swing");
	}
});

// Active Path Active
var path = location.pathname.split("/");
var current = location.pathname.split("/")[path.length - 1];
$(".menu li a").each(function () {
	if ($(this).attr("href").indexOf(current) !== -1 && current != "") {
		$(this).addClass("active");
	}
});

// Gallery Modal
$(".overlay, .modal-close, .modal-cancel").on("click", function (e) {
	$(".overlay").removeClass("active-color");
	$(".gallery-modal").removeClass("active");
	$(".share-modal").removeClass("active");
	$(".success-modal").removeClass("active");
	$(".logout-modal").removeClass("active");
});
// Gallery Modal

// Gallery Modal Click Event
let trigger3 = $(".gallery-item");
let dropdown3 = $(".gallery-modal");
if (trigger3 || dropdown3) {
	trigger3.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown3.toggleClass("active");
			$(".overlay").toggleClass("active-color");
		});
	});
	dropdown3.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		dropdown3.removeClass("active");
		$(".overlay").addClass("active-color");
	});
}

// Share Modal Click Event
let trigger4 = $(".share-btn");
let dropdown4 = $(".share-modal");
if (trigger4 || dropdown4) {
	trigger4.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown4.toggleClass("active");
			dropdown3.removeClass("active");
			$(".overlay").addClass("active-color");
		});
	});
	dropdown4.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		dropdown4.removeClass("active");
		$(".overlay").removeClass("active-color");
	});
}

// Downaload Modal Click Event
let trigger5 = $(".download-btn");
let dropdown5 = $(".success-modal");
if (trigger5 || dropdown5) {
	trigger5.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown3.removeClass("active");
			dropdown5.toggleClass("active");
			$(".overlay").addClass("active-color");
		});
	});
	dropdown5.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		dropdown5.removeClass("active");
		$(".overlay").removeClass("active-color");
	});
}

// Logout Modal Click Event
let trigger6 = $(".logout-btn");
let dropdown6 = $(".logout-modal");
if (trigger6 || dropdown6) {
	trigger6.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown3.removeClass("active");
			dropdown6.toggleClass("active");
			$(".overlay").addClass("active-color");
		});
	});
	dropdown6.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		dropdown6.removeClass("active");
		$(".overlay").removeClass("active-color");
	});
}

// Logout Modal Click Event
let trigger7 = $(".buy-package");
let dropdown7 = $(".package-modal");
if (trigger7 || dropdown7) {
	trigger7.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			dropdown3.removeClass("active");
			dropdown7.toggleClass("active");
			$(".overlay").addClass("active-color");
		});
	});
	dropdown7.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
	});
	$(document).on("click", function () {
		dropdown7.removeClass("active");
		$(".overlay").removeClass("active-color");
	});
}

$(".logo").on("click", function (e) {
	$(".menu-sidebar").toggleClass("menu-icon-show");
	$(".menu-sidebar").toggleClass("menu-icon-text-show");
	var menuSidebarWidth = $(".menu-sidebar").width();
	var bodyContent = $(".body-content");

	if (parseInt(screenSize) > parseInt(991)) {
		bodyContent.css("width", screenSize - menuSidebarWidth);
	}
});
window.addEventListener("resize", function (e) {
	if (parseInt(screenSize) > parseInt(991)) {
		var menuSidebarWidth = $(".menu-sidebar").width();
		$(".body-content").css("width", screenSize - menuSidebarWidth);
	}
});

var menuBottomWidth = $(".responsive-bottom-menu").height();
$(".body-content").css("margin-bottom", menuBottomWidth + 40 + "px");
