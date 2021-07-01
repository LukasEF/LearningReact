var num1 = 5;
var num2 = 10;
const additionElement = <p>The total of {num1} and {num2} is {num1+num2}</p>

ReactDOM.render(
  additionElement,
  document.getElementById('addition')
);