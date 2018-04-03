var link = document.querySelector(".map-popup");
var popup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-close");

var feedback = document.querySelector(".feedback-popup");
var writeus = document.querySelector(".modal-write-us");
var closefeedback = writeus.querySelector(".modal-close");

writeus.addEventListener("submit", function (evt) {
  if (document.getElementById("feedback-name").value == "" || document.getElementById("feedback-email").value == "" || document.getElementById("feedback-text").value == "") {
    evt.preventDefault();
    writeus.classList.remove("modal-shake");
    writeus.offsetWidth = writeus.offsetWidth;
    writeus.classList.add("modal-shake");
  };
});


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