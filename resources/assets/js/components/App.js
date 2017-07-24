import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleClick(url) {
    if (this.props.location.pathname !== url) {
      var div = document.querySelector('.main');
      div.style.opacity = 0;
      div.style.pointerEvents = 'none';
      setTimeout(() => this.props.history.push(url), 300);
    }
  }

  handleRequestChange(open, reason) {
    this.setState({
      open: open,
    });
  };

  handleTouchTap(thing, thing2) {
    thing.preventDefault();
    this.handleRequestChange(!this.state.open, 'touchtap');
  }

  render() {
    return (
      <div className='appnav'>
        <h2 className='title'>Felicia Yau</h2>
        <div className='navlinks'>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
            onRequestChange={this.handleRequestChange}
            onTouchTap={this.handleTouchTap}
            open={this.state.open}
          >
            <MenuItem primaryText='Know Me' onTouchTap={()=> this.handleClick('/')}/>
            <MenuItem primaryText='Know My Work' onTouchTap={()=> this.handleClick('/projects')}/>
            <MenuItem primaryText='Contact' onTouchTap={()=> this.handleClick('/contact')}/>
          </IconMenu>
        </div>
      </div>
    )
  }

}

export default App;

// {(this.props.location.pathname !== '/') ? <h4 onClick={()=> this.handleClick('/')}>Know Me</h4> : null}
// {(this.props.location.pathname !== '/projects') ? <h4 onClick={()=> this.handleClick('/projects')}>Know My Work</h4> : null}
// {(this.props.location.pathname !== '/contact') ? <h4 onClick={()=> this.handleClick('/contact')}>Contact</h4> : null}

// {(this.props.location.pathname !== '/') ? <h4><Link to='/'>Know Me</Link></h4> : null}
// {(this.props.location.pathname !== '/projects') ? <h4><Link to='/projects'>Know My Work</Link></h4> : null}
// {(this.props.location.pathname !== '/contact') ? <h4><Link to='/contact'>Contact</Link></h4> : null}

// <FlatButton
//   label='Know Me'
//   disableTouchRipple={true}
//   onClick={()=> this.handleClick('/')}/>
// <FlatButton
//   label='Know My Work'
//   disableTouchRipple={true}
//   onClick={()=> this.handleClick('/projects')}/>
// <FlatButton
//   label='Contact'
//   disableTouchRipple={true}
//   onClick={()=> this.handleClick('/contact')}/>