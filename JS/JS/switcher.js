//variables
const theme1btn = document.querySelector(".theme1btn");
const theme2btn = document.querySelector(".theme2btn");
const theme3btn = document.querySelector(".theme3btn");
const body = document.querySelector(".theme");

//theme buttons
theme1btn.addEventListener("click", (e) => {
  e.target.classList.add("theme1clicked");
  theme2btn.classList.remove("theme2clicked");
  theme3btn.classList.remove("theme3clicked");
  body.classList.add("theme1");
  body.classList.remove("theme2", "theme3");
});
theme2btn.addEventListener("click", (e) => {
  e.target.classList.add("theme2clicked");
  theme1btn.classList.remove("theme1clicked");
  theme3btn.classList.remove("theme3clicked");
  body.classList.add("theme2");
  body.classList.remove("theme1", "theme3");
});
theme3btn.addEventListener("click", (e) => {
  e.target.classList.add("theme3clicked");
  theme1btn.classList.remove("theme1clicked");
  theme2btn.classList.remove("theme2clicked");
  body.classList.add("theme3");
  body.classList.remove("theme1", "theme2");
});
