//Get current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Toggle mobile nav
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".header");
btnMobileNav.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////
//Implement smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll Back To Top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////
//Implement Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
