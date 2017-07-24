import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Recaptcha from 'react-recaptcha';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      pointerEvents: 'auto',
      response: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.response) {
      console.log('nope');
      return;
    }
    // do stuff
    const name = e.target.name.value;
    const email = e.target.email.value;
    const resume = e.target.resume.checked;
    console.log(name, email, resume);

    window.axios.post('/api/sendemail', `${name}:::${email}:::${resume}`)
    .then(response => {})
    .catch(err => {});
  }

  handleCallback(response) {
    this.setState({response});
  }

  render() {
    return (
      <div className='contact-container main' style={{opacity: this.state.opacity, pointerEvents: this.state.pointerEvents}}>
        <h3> Contact </h3>
        <h4 className='contact-description'> I am available for full-time opportunities. Contact me for: Full stack development and Freelance opportunities</h4>
        <form className='form form-large' onSubmit={this.handleSubmit}>
          <div className='form'>
            <div>
              <TextField
                id='name'
                floatingLabelText='Name'
                floatingLabelFixed={true}
                floatingLabelStyle={{color: '#3A405A'}}
                floatingLabelFocusStyle={{color: '#1F2A78'}}
                required
              />
            </div>
            <div>
              <TextField
                id='email'
                type='email'
                floatingLabelText='Email'
                floatingLabelFixed={true}
                floatingLabelStyle={{color: '#3A405A'}}
                floatingLabelFocusStyle={{color: '#1F2A78'}}
                required
              />
            </div>
            <div>
              <Checkbox id='resume' label='Receive a copy of my résumé'/>
            </div>
          </div>
          <div className='form'>
            <br/>
            <Recaptcha sitekey='6Ldp3ikUAAAAAG30Wu1YLBQxKvGBkp_jnKlx5Yss' onloadCallback={() => {}} verifyCallback={this.handleCallback} render='explicit'/>
            <br/>
            <div className='contact-button'>
              <RaisedButton label="Submit" primary={true} type='submit'/>
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default Home;