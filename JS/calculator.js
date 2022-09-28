//variables
const display = document.querySelector(".display");
const previousdisplay = document.querySelector(".previousdisplay");
const buttons = document.querySelectorAll(".btn");
const operationbtn = document.querySelectorAll(".operation");
let previous = false;

//display the id of the buttons on the screen
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.textContent += e.target.id;
  });
});

//when you click on the operation button the numbers move to previousdisplay. IF previousdisplay is true when you click on operation you will calculate last number & new number
operationbtn.forEach((opbtn) => {
  opbtn.addEventListener("click", (e) => {
    if (previous == false) {
      previousdisplay.textContent = display.textContent + e.target.id;
      previous = true;
      display.textContent = "";
    } else {
      display.textContent = eval(
        previousdisplay.textContent + display.textContent
      );
      previousdisplay.textContent = display.textContent + e.target.id;
      display.textContent = "";
    }
  });
});

//equal button => we calculate according to display & previousdisplay
equal.addEventListener("click", () => {
  display.textContent = eval(previousdisplay.textContent + display.textContent);
  previousdisplay.textContent = "";
  ("");
});

//reset button => returns to 0
reset.addEventListener("click", () => {
  display.textContent = "";
  previousdisplay.textContent = "";
});

//del button => we remove 1 digit
del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  previousdisplay.textContent = previousdisplay.textContent.slice(0, -1);
});
