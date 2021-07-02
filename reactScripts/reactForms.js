class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>React Forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <p>Form value: {this.state.value}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('form')
);

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Write some stuff'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('essayform')
);

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'item1' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('You selected: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Select form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select item:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="Item 1">Item 1</option>
                            <option value="Item 2">Item 2</option>
                            <option value="Item 3">Item 3</option>
                            <option value="Item 4">Item 4</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <ItemForm />,
    document.getElementById('selectform')
);

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('complexform')
);
