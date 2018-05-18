// Code DigitalClicker Component Here

export default class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state={
      timesClicked = 0
    }
  }
  handleClick = (event)=>{

  }

  render(){
    return(
      <div>
        <p> Ive been clicked {this.state.timesClicked} times </p>

      </div>
    )
  }
}
