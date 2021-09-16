// Selecting elements
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const formEl = document.querySelector(".form");

// Toggle navigation

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Page navigation

document.querySelectorAll(".link-scroll").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    headerEl.classList.remove("nav-open");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Sticky navigation

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector(".header-sticky-box").classList.add("sticky");
    } else {
      document.querySelector(".header-sticky-box").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-96px",
  }
);
observer.observe(headerEl);

// Ajax form

async function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  try {
    await fetch(e.target.action, {
      method: formEl.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    alert("Uspio si");
    formEl.reset();
  } catch (err) {
    alert("Nisi uspio");
  }
}
formEl.addEventListener("submit", handleSubmit);
