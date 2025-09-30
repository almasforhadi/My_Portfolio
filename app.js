/*--------------------------------Navbar menu----------------------*/
const sidemenu = document.getElementById('sidemenu');
function openmenu(){ sidemenu.style.right="0"; }
function closemenu(){ sidemenu.style.right="-200px"; }

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//mode
const toggleLogo = document.querySelector(".dark-mode-toggle");

toggleLogo.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Apply saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});


/*-------------------- Modal -----------------------------------*/
const hireBtn=document.getElementById('hireBtn');
const hireModal=document.getElementById('hireModal');
const closeModal=document.getElementById('closeModal');
// const hireForm=document.getElementById('hireForm');

hireBtn.addEventListener('click',()=>{ hireModal.setAttribute('aria-hidden','false'); });
closeModal.addEventListener('click',()=>{ hireModal.setAttribute('aria-hidden','true'); });
hireModal.addEventListener('click',(e)=>{ if(e.target===hireModal){ hireModal.setAttribute('aria-hidden','true'); }});


/*-------------------------About Tabs-------------------------------*/
const tablinks = document.getElementsByClassName('tab_links');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabname, ev){
    for(let link of tablinks){
        link.classList.remove("active-link");
    }
    for(let content of tabContents){
        content.classList.remove("active-tab");
    }
    ev.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//for img
document.addEventListener("DOMContentLoaded", () => {
  const aboutCols = document.querySelectorAll(".about-col-1, .about-col-2");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 } 
  );

  aboutCols.forEach(col => observer.observe(col));
});

/*-----------------------------  Skills -------------------------------------- */
function filterSkills(category, ev) {
  let items = document.querySelectorAll("#skill .item");
  let tags = document.querySelectorAll(".skill-categories .tag");

  tags.forEach(tag => tag.classList.remove("active"));
  ev.target.classList.add("active");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
      item.style.animation = "fadeInUp 0.8s ease";
    } else {
      item.style.display = "none";
    }
  });
}

/*----------------------------- Services ------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

/*----------------------------- Portfolio ------------------------------*/

const works = document.querySelectorAll(".work");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);
works.forEach((work) => observer.observe(work));

// Filter System
const filterBtns = document.querySelectorAll(".filter-btn");
const workItems = document.querySelectorAll(".work");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    workItems.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.classList.remove("hide"); // show
      } else {
        item.classList.add("hide"); // hide
      }
    });
  });
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

works.forEach((work) => {
  work.addEventListener("click", () => {
    const imgSrc = work.querySelector("img").src;
    lightbox.style.display = "flex";
    lightboxImg.src = imgSrc;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* -------------------------------Contact--------------------------*/
// const form = document.getElementById(".contactForm");
// const popup = document.getElementById("successPopup");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const name = form.name.value.trim();
//   const email = form.email.value.trim();
//   const message = form.message.value.trim();

//   if (name && email && message) {
//     popup.style.display = "block";
//     setTimeout(() => {
//       popup.style.display = "none";
//     }, 3000);

//     form.reset();
//   }
// });

/*------------------ Back To Top Button ----------------------------*/
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
