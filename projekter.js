// PROJEKTER SIDE \\

// Tilføj grey-klassen til tema 1
document.querySelector("#tema1").classList.add("grey");
// Tilføj grey-klassen til tema 2
document.querySelector("#tema2").classList.add("grey");
// Tilføj grey-klassen til tema 3
document.querySelector("#tema3").classList.add("grey");
// Tilføj grey-klassen til tema 4
document.querySelector("#tema4").classList.add("grey");

// Lyt efter musen, når den holder over billedet
document.querySelector("#tema1").addEventListener("mouseover", handleMouseOver1);

function handleMouseOver1() {
  // tilføjer nofilter-klassen
  document.querySelector("#tema1").classList.add("nofilter");
}

// Lyt efter, når musen forlader billedet
document.querySelector("#tema1").addEventListener("mouseleave", handleMouseLeave1);

function handleMouseLeave1() {
  // Hvis nofilter-klassen ikke er til stede, tilføj grey-klassen
  if (!document.querySelector("#tema1").classList.remove("nofilter")) {
    document.querySelector("#tema1").classList.add("grey");
  }
}

// Lyt efter musen, når den holder over billedet
document.querySelector("#tema2").addEventListener("mouseover", handleMouseOver2);

function handleMouseOver2() {
  // tilføjer nofilter-klassen
  document.querySelector("#tema2").classList.add("nofilter");
}

// Lyt efter, når musen forlader billedet
document.querySelector("#tema2").addEventListener("mouseleave", handleMouseLeave2);

function handleMouseLeave2() {
  // Hvis nofilter-klassen ikke er til stede, tilføj grey-klassen
  if (!document.querySelector("#tema2").classList.remove("nofilter")) {
    document.querySelector("#tema2").classList.add("grey");
  }
}

// Lyt efter musen, når den holder over billedet
document.querySelector("#tema3").addEventListener("mouseover", handleMouseOver3);

function handleMouseOver3() {
  // tilføjer nofilter-klassen
  document.querySelector("#tema3").classList.add("nofilter");
}

// Lyt efter, når musen forlader billedet
document.querySelector("#tema3").addEventListener("mouseleave", handleMouseLeave3);

function handleMouseLeave3() {
  // Hvis nofilter-klassen ikke er til stede, tilføj grey-klassen
  if (!document.querySelector("#tema3").classList.remove("nofilter")) {
    document.querySelector("#tema3").classList.add("grey");
  }
}

// Lyt efter musen, når den holder over billedet
document.querySelector("#tema4").addEventListener("mouseover", handleMouseOver4);

function handleMouseOver4() {
  // tilføjer nofilter-klassen
  document.querySelector("#tema4").classList.add("nofilter");
}

// Lyt efter, når musen forlader billedet
document.querySelector("#tema4").addEventListener("mouseleave", handleMouseLeave4);

function handleMouseLeave4() {
  // Hvis nofilter-klassen ikke er til stede, tilføj grey-klassen
  if (!document.querySelector("#tema4").classList.remove("nofilter")) {
    document.querySelector("#tema4").classList.add("grey");
  }
}
