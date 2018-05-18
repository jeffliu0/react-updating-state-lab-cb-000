// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component{
  constructor{
    super()

    this.state = {
        js: {
          errors: [],
          user: null,
          settings: {
            bitrate: 8,
            video:{
              resolution: '1080p'
            }
          }
        }
    }
  }

  handleBitrate = {
    this.setState()
  }

  handleResolution = {
    this.setState()
  }

  render(){
    return(
      <button id='bitratebutton' onClick={this.handleBitrate}>
      Change bitrate </button>

      <button id='resolutionbutton' onClick={this.handleResolution}>
      Change resolution </button>
    )
  }

}
