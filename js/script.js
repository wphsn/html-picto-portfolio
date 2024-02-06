console.log("script loaded");
var mobileToggler = document.querySelectorAll(".mobile-toggler");
mobileToggler.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("newerw");
    removeGrandparentClass(element, "open", "nav");
  });
});

// Get the header element
var header = document.querySelector("header");

// Get the offset position of the header
var stickyOffset = header.offsetTop + 50;

// Listen for the scroll event and add or remove the sticky class
window.addEventListener("scroll", function () {
  if (window.pageYOffset > stickyOffset) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

function findNavGrandparent(element) {
  var parent = element.parentNode;

  while (parent && parent.tagName !== "NAV") {
    parent = parent.parentNode;
  }

  return parent;
}

function removeGrandparentClass(button, targetClass) {
  var navGrandparent = findNavGrandparent(button);

  if (navGrandparent) {
    navGrandparent.classList.toggle(targetClass);
  }
}
