class ShoppingClass extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                    <li>Facebook</li>
                </ul>
            </div>
        );
    }
}