function formatName(user) {
    return user.firstname + ' ' + user.lastname;
}

const user = {
    firstname: 'Atul',
    lastname: 'Jha',
    avatarUrl: <a href="https://www.reactjs.org">link</a>

}

// const element = (
//     <h1>
//         Hello, {formatName(user)}
//     </h1>
// )

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>
    }
    else {
        return <h1>Hello, Stranger!</h1>
    }
}

const element = getGreeting(user)
const element2 = user.avatarUrl
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
root.render(element2);