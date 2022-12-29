class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.state(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }


}