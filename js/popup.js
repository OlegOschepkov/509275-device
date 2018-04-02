var link = document.querySelector(".map-popup");
var popup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");

var feedback = document.querySelector(".feedback-popup");
var writeus = document.querySelector(".modal-write-us");
var form = writeus.querySelector(".modal-feedback");
var name = writeus.querySelector("[name=feedback-name]");
var mail = writeus.querySelector("[name=feedback-email]");
var text = writeus.querySelector("[name=feedback-text]");
var closefeedback = writeus.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeus.classList.add("modal-show");
});
closefeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeus.classList.remove("modal-show");
  writeus.classList.remove("modal-shake");
});
form.addEventListener("submit", function (evt) {
  if (!name) {
    evt.preventDefault();
    writeus.classList.remove("modal-shake");
    writeus.offsetWidth = writeus.offsetWidth;
    writeus.classList.add("modal-shake");
  };
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeus.classList.contains("modal-show")) {
      writeus.classList.remove("modal-show");
      writeus.classList.remove("modal-show");
    }
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show")
    }
  }
});