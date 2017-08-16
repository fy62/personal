import React, { Component } from 'react';


class Vid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // poster='/images/nyc.png'
    return (
      <video loop muted autoPlay poster='/images/nyc.png'>
        <source src='/images/nyc.mov' type='video/mov'/>
        <source src='/images/nyc.mp4' type='video/mp4'/>
      </video>
    )
  }

}

export default Vid;