const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.textContent += e.target.id;
    console.log(display);
  });
});

equal.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});

reset.addEventListener("click", () => {
  display.textContent = "";
});

del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});
