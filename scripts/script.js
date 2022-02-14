// сегодня тут так же, как у меня в холодильнике.

const toggler = document.querySelectorAll(".toggler__checkbox")

const burger = document.querySelector(".burger__box")
//кнопка формы мыла
const emailForm = document.querySelector(".footer__form")
const email = document.querySelector(".footer__email")
const emailButton = document.querySelector(".footer__button-submit")

//ссылки
const navLinks = document.querySelectorAll(".header__links[data-goto]")

const header = document.querySelector(".header")
const overview = document.querySelector(".overview")
const place = document.querySelector(".place")
const road = document.querySelector(".road")
const bike = document.querySelector(".bike")
const training = document.querySelector(".training")
const footer = document.querySelector(".footer")

// бургер
burger.addEventListener("click", function () {
   header.classList.toggle("header_active");
})

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
   emailButton.classList.add("footer__button-submit_active")
})

//кнопка формы
emailButton.addEventListener("click", function () {
   email.value = "Круто!"
   emailButton.disabled = true
   email.disabled = true
})

//кнопка формы
emailForm.addEventListener("mouseleave", function () {
   emailButton.classList.remove("footer__button-submit_active")
})


// прокрутка ссылок

if (navLinks.length > 0) {
   navLinks.forEach(navLinks => {
      navLinks.addEventListener("click", onMenuLinkClick)
   })

   function onMenuLinkClick(evt) {
      const navLink = evt.target
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const gotoBlock = document.querySelector(navLink.dataset.goto)
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top
         // - document.querySelector("header").offsetHeight
         // header.classList.remove("header_active")

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         })
         evt.preventDefault()
      }
   }
}