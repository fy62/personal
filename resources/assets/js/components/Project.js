import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ContentLink from 'material-ui/svg-icons/content/link';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='project-container'>
        <Paper zDepth={2} className='project-paper'>
          <div className='project-contents'>
          <div className='project-header'>
            <h4>{this.props.name}</h4>
            <div className='project-links'>
              {
                (this.props.link) ? <div className='project-link'>
                  <a href={this.props.link} target='_blank'>
                    <ContentLink/>
                  </a>
                </div>
              : null
              }
              {
                (this.props.git) ? <div className='project-link'>
                  <a href={this.props.git} target='_blank'>
                    <FontIcon className="muidocs-icon-custom-github" color='black'/>
                  </a>
                </div>
                : null
              }
              {
                (this.props.video) ? <div className='project-link'>
                  <a href={this.props.video} target='_blank'>
                    <SvgIcon>
                      <path fill="#000000" d="M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z" />
                    </SvgIcon>
                  </a>
                </div>
                : null
              }
            </div>
          </div>
          <p>{this.props.date}</p>
          <p>{this.props.description}</p>
          <ul>
            {
              this.props.bullets.split('::').map((bullet, i) =>
                <li key={i}>{bullet}</li>)
            }
          </ul>
          </div>
        </Paper>
      </div>
    )
  }

}

export default Project;