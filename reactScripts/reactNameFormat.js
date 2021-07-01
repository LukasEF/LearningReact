function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user){
    if(user){
        return <p>Hello, {formatName(user)}!</p>
    }
    return <p>Hello, Stranger</p>
}

const user = {
    firstName: 'Lukas',
    lastName: 'Foster'
};

ReactDOM.render(
    getGreeting(user),
    document.getElementById('user')
);