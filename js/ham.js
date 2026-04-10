const hamburger = document.getElementById("hamburger");
const globalNav = document.getElementById("globalNav");
const navLinks = document.querySelectorAll("#globalNav a");

if (hamburger && globalNav) {
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    globalNav.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    const isOpen = hamburger.classList.contains("active");

    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    hamburger.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      globalNav.classList.remove("active");
      document.body.classList.remove("menu-open");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "メニューを開く");
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".js-flowup");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  targets.forEach((target) => observer.observe(target));
});
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".slidein-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  targets.forEach((target) => observer.observe(target));
});