const expressionInput = document.getElementById("expression");
const resultInput = document.getElementById("result");

const buttons = document.querySelectorAll(".btn-dark");

const operators = ["+", "-", "*", "/", "."];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    let current = expressionInput.value;

    if (value === "C") {
      expressionInput.value = "";
      resultInput.value = "";
    } else if (value === "=") {
      try {
        const result = eval(current);
        resultInput.value = result;
        expressionInput.value = ""; 
      } catch (e) {
        resultInput.value = "Error";
        expressionInput.value = "";
      }
    } else {
      const lastChar = current.slice(-1);
      if (operators.includes(value)) {
        if (operators.includes(lastChar)) {
          expressionInput.value = current.slice(0, -1) + value;
        } else if (current !== "") {
          expressionInput.value += value;
        }
      } else {
        expressionInput.value += value;
      }
    }
  });
});
