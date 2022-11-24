let menu = document.querySelector('.header__burger');
let list = document.querySelector('.header__list');

menu.addEventListener('click', function() {
    document.body.classList.toggle('lock');
	list.classList.toggle('active');
	menu.classList.toggle('active');
});

list.addEventListener('click', function() {
	document.body.classList.remove ('lock');
	list.classList.remove('active');
	menu.classList.remove('active');
});

var swiper = new Swiper(".review__slider", {
	slidesPerView: 2,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		676: {
			slidesPerView: 2,
		},
	},
  });

let icon = document.querySelectorAll('.block-popular__fav');
icon.forEach(icon => {
	icon.addEventListener('click', 
		function (e) {
			icon.classList.toggle('red');
		}
	);
});

let tabs = document.querySelectorAll(".tabs__item");
let tabsContent = document.querySelectorAll(".tabs__content");

tabs.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		tabs.forEach(function(item) {
			item.classList.remove('active');
		});
		tabsContent.forEach(function(item) {
			item.classList.remove('active');
		});

		currentBtn.classList.add('active');
		currentTab.classList.add('active');
	});
});

let element = document.querySelectorAll('.tabs__select');

element.forEach(element => {
	let choices = new Choices(element, {
		itemSelectText: '',
		searchEnabled: false,
	})
});