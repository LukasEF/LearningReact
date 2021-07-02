var num1 = 5;
var num2 = 10;
const additionElement = <div>
  <h1>React Addition</h1>
  <p>The total of {num1} and {num2} is {num1 + num2}</p>
</div>

ReactDOM.render(
  additionElement,
  document.getElementById('addition')
);