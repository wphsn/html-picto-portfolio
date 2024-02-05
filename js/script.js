console.log("script loaded");
var mobileToggler = document.querySelectorAll(".mobile-toggler");
mobileToggler.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.parentElement.classList.toggle("open");
  });
});
