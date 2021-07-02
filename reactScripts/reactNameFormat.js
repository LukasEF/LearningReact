function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <div>
            <h1>React Name Format</h1>
            <p>Hello, {formatName(user)}!</p>
        </div>
    }
    return <div>
        <h1>React Name Format</h1>
        <p>Hello, Stranger</p>
    </div>
}

const user = {
    firstName: 'Lukas',
    lastName: 'Foster'
};

ReactDOM.render(
    getGreeting(user),
    document.getElementById('user')
);