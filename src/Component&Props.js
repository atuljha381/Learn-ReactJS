function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name='Atul' />
            <Welcome name='Keshav' />
            <Welcome name='Krishna' />
        </div>
    )
}

export default App