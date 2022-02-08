// сегодня тут так же, как у меня в холодильнике.

const toggler = document.querySelectorAll(".toggler__checkbox")

const burger = document.querySelector(".burger__box")
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
      header.classList.toggle("header_dark")
      overview.classList.toggle("overview_dark")
      place.classList.toggle("place_dark")
      road.classList.toggle("road_dark")
      bike.classList.toggle("bike_dark")
      training.classList.toggle("training_dark")
      footer.classList.toggle("footer_dark")
   })
})