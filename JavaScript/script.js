var button = document.getElementById("monitor"); // zmienna globalna

function dodaj(number) {
  button.value += number; /// dodaje cyfre do wyświetlacza
}

function wynik() {
  let screen = document.getElementById("monitor");
  let answer = eval(screen.value);

  screen.value = answer;
  if (answer == "Infinity") {
    screen.value = "Nie dziel przez zero!!"; // dzielenie przez zero
  }

  // ??
}

function ClearAll() {
  box = document.getElementById("monitor"); // removes everything from monitor
  box.value = "";
}

function ClearOne() {
  let screen = document.getElementById("monitor"); // usuwa jeden znak z wyświetlacza
  let ClearOne = screen.value;
  if (ClearOne.length > 0) {
    ClearOne = ClearOne.substring(0, ClearOne.length - 1);
    screen.value = ClearOne;
  }
}

function getoperator(operand) {
  let screen = document.getElementById("monitor"); // dodanie operatora[-,+,*,/]   //   box.value = operand; -- taki zapis tez jest prawidłowy

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
    // zamiast drugiego ifa może być w jednym (!button.value.includes(".") && button.value != "")
    if (button.value != "") {
      button.value += ".";
    }
  }
}
