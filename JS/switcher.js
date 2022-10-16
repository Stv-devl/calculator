//variables
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const theme3btn = document.querySelector(".theme3btn");
const body = document.querySelector("body");

//function for prefer color sheme
function starterTheme() {
  const preferLight = window.matchMedia("(prefers-color-scheme: light)");
  const preferDark = window.matchMedia("(prefers-color-scheme: dark)");
  const noPreference = window.matchMedia(
    "(prefers-color-scheme: no-preference)"
  );

  if (preferLight.matches == true) {
    body.classList.add("light");
    light.classList.add("lightclicked");
  } else if (preferDark.matches == true) {
    body.classList.add("dark");
    dark.classList.add("darkclicked");
  } else {
    body.classList.add("light");
    light.classList.add("lightclicked");
  }
}
starterTheme();

//change themes with buttons :
//theme 1 : light button
light.addEventListener("click", () => {
  light.classList.add("lightclicked");
  dark.classList.remove("darkclicked");
  theme3btn.classList.remove("theme3clicked");
  body.classList.add("light");
  body.classList.remove("dark", "theme3");
});
//theme 1 : dark button
dark.addEventListener("click", () => {
  dark.classList.add("darkclicked");
  light.classList.remove("lightclicked");
  theme3btn.classList.remove("theme3clicked");
  body.classList.add("dark");
  body.classList.remove("light", "theme3");
});
//theme 1 : button
theme3btn.addEventListener("click", () => {
  theme3btn.classList.add("theme3clicked");
  light.classList.remove("lightclicked");
  dark.classList.remove("darkclicked");
  body.classList.add("theme3");
  body.classList.remove("light", "dark");
});
