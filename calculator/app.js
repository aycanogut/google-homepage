//* this functions takes two values and returns the calculation ( simple math )
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    alert(`Can't do that, you simp! Try another number except 0.`);
  }
};

//* this function takes operator and operands as arguments and returns the preferred calculations own function.
const operate = (operator, firstArgument, secondArgument) => {
  switch (operator) {
    case "+":
      return add(firstArgument, secondArgument);
      break;
    case "-":
      return subtract(firstArgument, secondArgument);
      break;
    case "*":
      return multiply(firstArgument, secondArgument);
      break;
    case "/":
      return divide(firstArgument, secondArgument);
      break;
  }
};

//* DOM declarations and main functionalities
const calculate = () => {
  const calculator = document.querySelector(".calculator");
  let calculatorScreen = calculator.querySelector(
    ".calculator__screen__result"
  );

  // this array stores all the numbers which clicked
  let arr = [];

  // event listener for all butttons
  calculator.querySelectorAll(".calculator__buttons__item").forEach((item) => {
    item.addEventListener("click", (event) => {
      // value of current number
      let displayValue = event.target.textContent;

      // conditional chain for 'only valid numbers'
      if (displayValue === "." || displayValue.match("^[0-9]+$")) {
        arr.push(displayValue);
        calculatorScreen.textContent = arr.join("");
        console.log(arr);
      } else if (displayValue === "del") {
        arr.pop();
        calculatorScreen.textContent = arr.join("");
        console.log(arr);
      }

      // clear the screen and other guys when 'click' pressed
      else if (displayValue === "clear") {
        displayValue = null;
        calculatorScreen.textContent = "";
        arr = [];
        console.log(arr);
      }
    });
  });
};

calculate();

// ilk ve ikinci datayi ayrica tutup operate edebilecek bir yontem bul
// 2 array ?
