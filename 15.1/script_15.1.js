const btn = document.querySelector(".j-btn");
const iconOne = document.querySelector(".btn_icon_01");
const iconTwo = document.querySelector(".btn_icon_02");

btn.addEventListener("click", () => {
  iconOne.classList.toggle("btn--invisible");
  iconTwo.classList.toggle("btn--invisible");
});
