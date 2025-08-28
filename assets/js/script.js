window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");

  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const typed1 = new Typed('.typing-anim1', {
  strings: ['Fullstack Developer','Student'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

const typed2 = new Typed('.typing-anim2', {
  strings: ['Frontend','Backend'],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});