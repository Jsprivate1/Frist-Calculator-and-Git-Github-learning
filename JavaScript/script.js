var button = document.getElementById("monitor"); //  global variable

function dodaj(number) {
  button.value += number; /// adds digit to the monitor
}
// RESULT
function wynik() {
  let screen = document.getElementById("monitor");
  let answer = eval(screen.value);

  screen.value = answer;
  if (answer == "Infinity") {
    screen.value = "Nie dziel przez zero!!"; // dividing by 0
  }

  // ??
}

function ClearAll() {
  box = document.getElementById("monitor"); // removes everything from monitor
  box.value = "";
}

function ClearOne() {
  let screen = document.getElementById("monitor"); // removes one mark from monitor
  let ClearOne = screen.value;
  if (ClearOne.length > 0) {
    ClearOne = ClearOne.substring(0, ClearOne.length - 1);
    screen.value = ClearOne;
  }
}

function getoperator(operand) {
  let screen = document.getElementById("monitor"); // adds operator[-,+,*,/]   //   box.value = operand; -- can be written like this either

  if (operand === "+") {
    screen.value += "+";
  }
  if (operand === "-") {
    screen.value += "-";
  }
  if (operand === "/") {
    screen.value += "/";
  }
  if (operand === "*") {
    screen.value += "*";
  }
}

function Decimal() {
  button = document.getElementById("monitor"); // Add "."
  if (!button.value.includes(".")) {
    // Can be written like this either (!button.value.includes(".") && button.value != "") 
    if (button.value != "") {
      button.value += ".";
    }
  }
}
