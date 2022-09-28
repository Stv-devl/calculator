const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const buttons = document.querySelectorAll(".btn");
const calc = document.querySelectorAll(".calc");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.textContent += e.target.id;
  });
});

calc.forEach((calcbtn) => {
  calcbtn.addEventListener("click", (e) => {
    display2.textContent = display.textContent;
    display.textContent = "";
    calcul = e.target.id;
  });
});

equal.addEventListener("click", () => {
  display.textContent = eval(display2.textContent + display.textContent);
  display2.textContent = "";
  ("");
});

reset.addEventListener("click", () => {
  display.textContent = "";
  display2.textContent = "";
});

del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  display2.textContent = display2.textContent.slice(0, -1);
});

/*
const calculate = () => {
  if (number_people > 0 && bill > 0 && calcTip > 0) {
    totalTip = ((bill * calcTip) / number_people).toFixed(2); //tip amount
    totalPeople = ((bill * calcPeople) / number_people).toFixed(2); //total price person
    amountTip.textContent = `$${totalTip}`;
    amountTotal.textContent = `$${totalPeople}`;
    choosenumber.textContent = "";
  }

  const display = document.querySelector(".display");
  const display2 = document.querySelector(".display2");
  const buttons = document.querySelectorAll(".btn");
  const calc = document.querySelectorAll(".calc");
  let calcul;
  
  console.log(calc);
  
  calc.forEach((calcbtn) => {
    calcbtn.addEventListener("click", (e) => {
      display2.textContent += display.textContent + e.target.id;
      display.textContent = "";
      console.log(display);
      console.log(display2);
    });
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      display.textContent += e.target.id;
      calcul = display.textContent;
  
      console.log(calcul);
    });
  });
  
  equal.addEventListener("click", () => {
    display.textContent = eval(display.textContent);
  });
  
  reset.addEventListener("click", () => {
    display.textContent = "";
    display2.textContent = "";
  });
  
  del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
  });
  */
