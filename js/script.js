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

// Initialize the previous scroll position variable
var prevScrollPos = window.pageYOffset;

// Set the threshold for when to add/remove the sticky class
var scrollThreshold = 20;

// Flag to track whether the sticky class has been added
var isStickyAdded = false;

// Listen for the scroll event and add or remove the sticky class
window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (
    Math.abs(currentScrollPos - prevScrollPos) > scrollThreshold &&
    !isStickyAdded
  ) {
    // Scrolling down or up beyond the threshold and sticky not added, add sticky class
    header.classList.add("sticky");
    isStickyAdded = true;
  } else if (currentScrollPos <= scrollThreshold && isStickyAdded) {
    // Scrolling up to the top and sticky added, remove sticky class
    header.classList.remove("sticky");
    isStickyAdded = false;
  }

  // Update the previous scroll position
  prevScrollPos = currentScrollPos;
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
