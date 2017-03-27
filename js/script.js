var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

var LinkPopupOpen = document.querySelectorAll(".js-popup-open");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-content--overlay");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

for(var i=0;i<LinkPopupOpen.length;i++) {
  LinkPopupOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content--show");
    overlay.classList.add("modal-content--overlay-show");
  });

  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content--show");
    overlay.classList.remove("modal-content--overlay-show");
  });
}
