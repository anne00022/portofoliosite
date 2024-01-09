window.addEventListener("load", sidenVises);

// Finder den aktuelle URL-sti
var path = window.location.pathname;
var page = path.split("/").pop();

// MENU \\
// Tjekker hvilken side vi er på og tilføjer 'active' klassen til det tilsvarende link

function sidenVises() {
  console.log("sidenVises");

  if (page == "projekter.html") {
    document.querySelector("#projekter").classList.add("side_link");
  } else if (page == "om.html") {
    document.querySelector("#om").classList.add("side_link");
  }

  document.querySelector("#projekter").addEventListener("mouseover", underLineHoverProjekter);

  function underLineHoverProjekter() {
    document.querySelector("#projekter").classList.add("side_link");
  }

  document.querySelector("#om").addEventListener("mouseover", underLineHoverOm);

  function underLineHoverOm() {
    document.querySelector("#om").classList.add("side_link");
  }

  document.querySelector("#projekter").addEventListener("mouseleave", underLineHoverProjekterRemove);

  function underLineHoverProjekterRemove() {
    if (page == "projekter.html") {
      document.querySelector("#projekter").classList.add("side_link");
    } else {
      document.querySelector("#projekter").classList.remove("side_link");
    }
  }

  document.querySelector("#om").addEventListener("mouseleave", underLineHoverOmRemove);

  function underLineHoverOmRemove() {
    if (page == "om.html") {
      document.querySelector("#om").classList.add("side_link");
    } else {
      document.querySelector("#om").classList.remove("side_link");
    }
  }
}
