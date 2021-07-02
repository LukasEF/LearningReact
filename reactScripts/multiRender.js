function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}

function App() {
    return (
        <div>
            <h1>Multi-rendering</h1>
            <Welcome name="Lukas" />
            <Welcome name="Nathan" />
            <Welcome name="Callum" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('multiRender')
);