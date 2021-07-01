function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}

function App(props) {
    return (
        <div>
            <p>Passed value is {props.value}</p>
            <Welcome name="Lukas" />
            <Welcome name="Nathan" />
            <Welcome name="Callum" />
        </div>
    );
}

ReactDOM.render(
    <App value="10"/>,
    document.getElementById('multiRender')
);