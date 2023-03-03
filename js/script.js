// typing animation hero name

var typed = new Typed(".typing", {
  strings: [" ", "Web developer", "Programmer", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 30,
  loop: true,
});

const currentNavItem = document.querySelector("a");
currentNavItem.addEventListener("click", () => {
  dayNight.querySelector("a").classList.add("active");
});
