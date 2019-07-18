import React from 'react'

export default class YouTubeDebugger extends React.Component{

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
    }
  }
}
incrementBitrate = ()=>{
  this.setState({
    settings: {
      ...this.state.settings, bitrate:12
    }
  })
}

incrementResolution = () =>{
  this.setState({
    settings:{
      ...this.state.settings,
      video: {
        ...this.state.settings.video, resolution:'720p'
    }
  }})
}
render(){
  return(
    <div>
    <button className="bitrate" onClick={this.incrementBitrate}>bitrate</button>
    <button className="resolution" onClick={this.incrementResolution}>resolution</button>
    </div>
  )
}

}
