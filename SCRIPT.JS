const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const Navigator = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  Navigator.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    Navigator.classList.remove("active");
  })
);

// const nav = document.querySelector("nav");
// const sectionOne = document.querySelector(".home-intro");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px",
// };

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       nav.classList.add("nav-scrolled");
//     } else {
//       nav.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

const data = [
  {
    title: "Video Editing rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },

  {
    title: "WebD rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Keynote rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Digital Imaging rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "CODE++ rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Gaming rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Quiz rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Group Discussion rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Logo rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "RoboWars rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "TrebleChef rules:",
    domain: "Domain: Open",
    team: "Team members: 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
  {
    title: "Photography rules:",
    domain: "Domain: Open",
    team: "Team members: 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem sed possimus, laudantium molestias at alias libero commodi consequatur assumenda numquam accusamus ipsa reprehenderit architecto omnis esse reiciendis illo velit eum.",
  },
];

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#read-more");
const closeModal = document.querySelector(".close-button");

// openModal.addEventListener("click", (e) => {
//   console.log(e);
//   modal.showModal();
// });

closeModal.addEventListener("click", () => {
  modal.close();
});

const openModalfunc = (event) => {
  console.log(event);
  const modalTitle = data[event].title;
  const modalDescription = data[event].description;
  const modalDomain = data[event].domain;
  const modalTeam = data[event].team;
  console.log(modalTitle);
  console.log(modalDescription);
  console.log(modalDomain);
  console.log(modalTeam);
  const modalHeading = document.querySelector(".heading-modal");
  const modalPara = document.querySelector(".modal-para");
  const modalDomainheading = document.querySelector(".sub-heading-modal-1");
  const modalTeamheading = document.querySelector(".sub-heading-modal-2");
  modalHeading.innerHTML = modalTitle;
  modalPara.innerHTML = modalDescription;
  modalDomainheading.innerHTML = modalDomain;
  modalTeamheading.innerHTML = modalTeam;
  modal.showModal();
};
