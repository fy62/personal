import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import App from './App';
import Project from './Project';
import FlatButton from 'material-ui/FlatButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      pointerEvents: 'auto'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, key) {
    if (!key || (key && e.key === 'Enter')) {
      this.setState({opacity: 0, pointerEvents: 'none'});
      setTimeout(() => this.props.history.push('/contact'), 300);
    }
  }

  render() {
    const estimator = {
      name: 'Estimator',
      link: 'http://estimator.theideasmaker.com',
      date: 'Jun 2017 - Jul 2017',
      description: 'A project estimator tool used by The Ideas Maker to give their clients an estimated cost for their proposed site or app idea.',
      bullets: 'Redesigned old estimator site from scratch into a single-page app with a greater focus on user experience::'
        + 'Built using React, Redux, Laravel, PHP, Facebook Login API, HTML5, and CSS3'
    }
    const picMeUp = {
      name: 'PicMeUp',
      link: 'http://picmeup.herokuapp.com',
      git: 'https://github.com/teampicmeup/picmeup',
      date: 'Mar 2017',
      description: 'A self-care app that allows users to record affirmations ahead of time and curate them in playlists',
      bullets: 'Personally implemented backend Express routes for adding, editing, and deleting videos, tags, and playlists and created single video view::'
        + 'Built using React, Express, Sequelize, PostgreSQL, HTML5, CSS3, and Bootstrap::'
        + 'Winner of the Video Hack Day 3 Ziggeo Award'
    }
    const makingWaves = {
      name: 'makingWaves',
      git: 'https://github.com/dfrho/makingWaves',
      date: 'Mar 2017',
      description: 'Alexa skill that allows users to hear the current hour\'s hottest trending Google search terms.',
      bullets: 'Based on a second-place winning project at the SHPE Amazon Alexa Hackathon::'
        + 'Allows user to ask Alexa for a list of trending topics or for detailed information on a single topic::'
        + 'Built using the Alexa Skills Kit, AWS Lamda, and Node.js'
    }
    const nightfall = {
      name: 'Nightfall',
      link: 'https://www.playnightfall.com',
      git: 'https://github.com/fy62/werewolf',
      video: 'https://www.youtube.com/watch?v=0HpvJyPeAM0&feature=youtu.be',
      date: 'Jan 2017 - Feb 2017',
      description: 'Online chat-based version of the multiplayer game Werewolf, involving an informed minority, an uninformed majority, and hidden agendas.',
      bullets: 'Personally implemented majority voting, moderator and player timers, and logic for handling disconnected players, and designed flow of information::'
        + 'Built using React, Redux, Express, HTML5, CSS3, Firebase, and Material UI'
    }
    const teenieAndFriends = {
      name: 'Teenie and Friends',
      link: 'http://teenieandfriends.herokuapp.com',
      git: 'https://github.com/fy62/teenie-and-friends',
      date: 'Jan 2017',
      description: 'Prototype e-commerce site for dog clothing, accessories, and food.',
      bullets: 'Personally implemented checkout component and logic, navbar, and product filtering::'
        + 'Built using React, Redux, Express, HTML5, CSS3, Sequelize, PostgreSQL, and Material UI'
    }
    const trelloSlack = {
      name: 'Trello-Slack',
      git: 'https://github.com/fy62/trello-slack',
      date: 'Jan 2017',
      description: 'App used to link Trello and Slack to alter Trello boards, lists, and cards through Slack and receive Slack notifications on board change.',
      bullets: 'Solo project developed using Slack API, Trello API, and Express::'
        + 'Winner of the the Educational Tool Award in the Grace Hopper Stackathon'
    }
    const projects = [
      estimator,
      picMeUp,
      makingWaves,
      nightfall,
      teenieAndFriends,
      trelloSlack
    ]
    return (
      <div className='projects-container main' style={{opacity: this.state.opacity, pointerEvents: this.state.pointerEvents}}>
        <App location={this.props.location} history={this.props.history}/>
        <div className='projects-text-container'>
          <h3> My Projects </h3>
          <div className='projects-list-container'>
            {
              projects.map(
                (project, i) =>
                  <Project
                    key={i}
                    name={project.name}
                    link={project.link}
                    git={project.git}
                    video={project.video}
                    date={project.date}
                    description={project.description}
                    bullets={project.bullets}
                    />)
            }
          </div>
        </div>
        <div className='next' onClick={(e) => this.handleClick(e)} onKeyPress={(e) => this.handleClick(e, true)} onMouseDown={(e) => e.preventDefault()} tabIndex='0'>
          <h4>CONTACT</h4>
          <h2 className='next-arrow'>&rarr;</h2>
        </div>
      </div>
    )
  }

}

export default Home;