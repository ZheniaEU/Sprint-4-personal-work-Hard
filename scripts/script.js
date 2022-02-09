// сегодня тут так же, как у меня в холодильнике.

const toggler = document.querySelectorAll(".toggler__checkbox")

const burger = document.querySelector(".burger__box")

//кнопка формы мыла
const emailForm = document.querySelector(".footer__form")
const email = document.querySelector(".footer__email")
const emailButton = document.querySelector(".footer__button-submit")

const header = document.querySelector(".header")
const overview = document.querySelector(".overview")
const place = document.querySelector(".place")
const road = document.querySelector(".road")
const bike = document.querySelector(".bike")
const training = document.querySelector(".training")
const footer = document.querySelector(".footer")


// жмяклер темы 
toggler.forEach(checkbox => {
   checkbox.addEventListener('change', () => {
      header.classList.toggle("header_theme_dark")
      overview.classList.toggle("overview_theme_dark")
      place.classList.toggle("place_theme_dark")
      road.classList.toggle("road_theme_dark")
      bike.classList.toggle("bike_theme_dark")
      training.classList.toggle("training_theme_dark")
      footer.classList.toggle("footer_theme_dark")
   })
})

//кнопка мыла
email.addEventListener("click", function () {
   emailButton.classList.add("footer__button-submit_active");
})

// при нажатии на кнопку "ок" появляется сообщение и блокируется доступ к кнопке и форме
emailButton.addEventListener("click", function () {
   email.value = "Круто!";
   emailButton.disabled = true;
   email.disabled = true;
})

// при перемещении курсора за границу элемента кнопка "ок" исчезает
emailForm.addEventListener("mouseleave", function () {
   emailButton.classList.remove("footer__button-submit_active");
})
