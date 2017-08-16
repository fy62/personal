import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import App from './App';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      transform: 'scaleY(1)',
      opacity: 1,
      pointerEvents: 'auto'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      let newCounter = this.state.counter + 1;
      if (newCounter > 11) newCounter = 0;
      this.setState({transform: 'scaleY(0)'});
      this.timeout = setTimeout(() => this.setState({counter: newCounter, transform: 'scaleY(1)'}), 200);
    }, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  handleClick(e, key) {
    if (!key || (key && e.key === 'Enter')) {
      this.setState({opacity: 0, pointerEvents: 'none'});
      setTimeout(() => this.props.history.push('/projects'), 300);
    }
  }

  render() {
    const skills = [
      'Node.',
      'React.',
      'Redux.',
      'Express.',
      'Firebase.',
      'Sequelize.',
      'PostgreSQL.',
      'Git.',
      'Laravel.',
      'C-Panel.',
      'HTML5.',
      'CSS3.'
    ]
    return (
      <div className='home-container main' style={{opacity: this.state.opacity, pointerEvents: this.state.pointerEvents}}>
        <App location={this.props.location} history={this.props.history} home={true}/>
        <div className='home-background'/>
        <div className='home-content-container-wrapper'>
          <div className='home-content-container'>
            <div className='home-text-container'>
              <div>
                <h3> I am a progressive web developer based in the New York metropolitan area.</h3>
                <div className='home-skill-container'>
                  <h3 className='skill-sentence'>I</h3><h3 className='skill-sentence'> am</h3><h3 className='skill-sentence'> a</h3><h3 className='skill-sentence'> Fullstack</h3><h3 className='skill-sentence'> Academy</h3><h3 className='skill-sentence'> graduate</h3><h3 className='skill-sentence'> with</h3>
                  <h3 className='skill-sentence'>advanced</h3><h3 className='skill-sentence'> skills</h3><h3 className='skill-sentence'> in</h3>
                </div>
                <div className='skill' style={{transform: this.state.transform}}>
                  <h2 className='skill-text'>
                    {skills[this.state.counter]}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='next home-only' onClick={(e) => this.handleClick(e)} onKeyPress={(e) => this.handleClick(e, true)} onMouseDown={(e) => e.preventDefault()} tabIndex='0'>
          <h4>KNOW MY WORK</h4>
          <h3 className='next-arrow'>></h3>
        </div>
      </div>
    )
  }

}

export default Home;

// <div className='next-arrow'><ChevronRight color='white'/></div>

// <div className='home-video-container'>
//           <video loop muted autoPlay className="home-video" src="/images/nyc.mp4">
//           </video>
//         </div>

// <video loop muted autoPlay className='home-video' poster='/images/nyc.png'>
//             <source src='/images/nyc.webm' type='video/webm'/>
//             <source src='/images/nyc.mp4' type='video/mp4'/>
//           </video>

// <Bgvid playsInline={false} className='home-video' containerWidth='100%' containerHeight='100%' src={[{src: '/images/nyc.webm', type: 'video/webm'}, {src: '/images/nyc.mp4', type: 'video/mp4'}]} poster='/images/nyc.png'/>