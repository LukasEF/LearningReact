function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Inline Conditional</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = ['Message 1', 'Message 2', 'Message 3'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('mail')
);