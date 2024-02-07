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

let isScrolled = false;

window.addEventListener('scroll', function () {
	if (window.scrollY === 0 && isScrolled) {
		header.classList.remove('sticky');
		isScrolled = false;
	} else if (window.scrollY > 100 && !isScrolled) {
		header.classList.add('sticky');
		isScrolled = true;
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
