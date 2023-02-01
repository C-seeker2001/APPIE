// !sticky nav code
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    // check if user left hero section
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    // check if user back at hero section
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px ",
  }
);
obs.observe(sectionHeroEl);
