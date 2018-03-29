var link = Document.querySelector(".map-popup");
var popup = Document.querySelector(".modal-map");
var close = popup.querySelector("modal-close");
var form = popup.querySelector("form");
var formMail = popup.querySelector("[id=feedback-email]");
var fromText = popup.querySelector("[id=feedback-text]");
var formName = popup.querySelector("[id=feedback-name]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  formName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!formName.value || !formMail.value || !formText.value) {
    evt.preventDefault();
    console.log("Пожалуйста заполните все поля");
  } else {
    localStorage.setItem("formName", formName);
    localStorage.setItem("formMail", formMail);
  }
});