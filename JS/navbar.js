console.log(
  "Hi,\nDo You like my page?\nI know you are a developer.\nIf You want to Contact via Whatsapp on 'https://rb.gy/61ico6' and Follow me than go to my contact section in 'https://www.coderargha.ml'.\n By the way Myself Arghadeep Mallick\n:) Stay Happy :)"
);
// //Create function to select elements
const selectElement = (element) => document.querySelector(element);
// //Open and close nav on click
selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

const hamburger = document.querySelector("#header .header .nav .menu-icons");
const mobile_menu = document.querySelector("#header .header .nav .nav-list");
const menu_item = document.querySelectorAll("#header .header .nav.nav-list li a");
const header = document.querySelector("#header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#ffffff";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
