const btnTop = document.querySelector(".btn_top");

function moveTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

btnTop.addEventListener("click", moveTop);
