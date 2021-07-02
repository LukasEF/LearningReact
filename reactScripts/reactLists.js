const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

ReactDOM.render(
    <div id="reactlist">
        <h1>React List</h1>
        <ul>{listItems}</ul>
    </div>,
    document.getElementById('list')
);