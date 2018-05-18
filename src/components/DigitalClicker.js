// Code DigitalClicker Component Here
import React from 'react'
export default class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state={
      timesClicked = 0
    }
  }
  handleClick = (event)=>{
    this.setState({timesClicked+=1})
  }

  render(){
    return(
      <div>
        <p> Ive been clicked {this.state.timesClicked} times </p>
        <button onClick = {this.handleClick}> Click this </button>
      </div>
    )
  }
}
