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


//подготовка карточки
const bikesArray = [
   {
      name: "Cervelo Caledonia-5",
      path: "./images/Highway/Cervelo-Caledonia-5.png",
      link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
   },
   {
      name: "Cannondale Systemsix Himod",
      path: "./images/Highway/Cannondale-Systemsix-Himod.png",
      link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
   },
   {
      name: "Trek Domane SL-7",
      path: "./images/Highway/Trek-Domane-SL-7.png",
      link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
   },



   {
      name: "Cervelo Aspero GRX 810",
      path: "./images/Grevel/Cervelo-Aspero-GRX-810.png",
      link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
   },
   {
      name: "Specialized S-Works Diverge",
      path: "./images/Grevel/Specialized-S-Works-Diverge.png",
      link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
   },
   {
      name: "Cannondale Topstone Lefty 3",
      path: "./images/Grevel/Cannondale-Topstone-Lefty-3.png",
      link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
   },



   {
      name: "Specialized S-Works Shiv",
      path: "./images/TT/Specialized-S-Works-Shiv.png",
      link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
   },
   {
      name: "BMC Timemachine 01 ONE",
      path: "./images/TT/BMC-Timemachine-01-ONE.png",
      link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
   },
   {
      name: "Cervelo P-Series",
      path: "./images/TT/Cervelo-P-Series.png",
      link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
   },


]

//подготовка слайдер

const roadArray =[
   {
      title: "Шоссе",
      subtitle: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
      road: "./images/road1.svg",
   },
   {
      title: "Грэвел",
      subtitle: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
      road: "./images/road2.svg",
   },
   {
      title: "ТТ",
      subtitle: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
      road: "./images/road3.svg",
   },
]