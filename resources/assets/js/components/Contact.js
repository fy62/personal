import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import App from './App';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Recaptcha from 'react-recaptcha';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      pointerEvents: 'auto',
      success: false,
      didSubmit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.success) {
      return;
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const resume = e.target.resume.checked;

    window.axios.post('/api/sendemail', `${name}:::${email}:::${resume}`)
    .then(response => {})
    .catch(err => {});

    this.setState({name, email, didSubmit: true});

    // this.props.history.push('/');
  }

  handleCallback(response) {
    window.axios.post('/api/checkrecaptcha', response)
    .then(response => {this.setState({success: response.data})})
    .catch(err => {});
  }

  render() {
    return (
      <div className='contact-container main' style={{opacity: this.state.opacity, pointerEvents: this.state.pointerEvents}}>
        <App location={this.props.location} history={this.props.history}/>
        {(!this.state.didSubmit) ?
        <div className='contact-text-container'>
          <h3> Contact </h3>
          <h4 className='contact-description'> I am available for full-time opportunities. Contact me for: Full stack development and Freelance opportunities.</h4>
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
        :
        <div className='contact-text-container thanks'>
          <h3> Contact </h3>
          <br/>
          <p>{`Thanks for your interest ${this.state.name}, an email has been sent to <${this.state.email}>`}</p>
        </div>
        }
      </div>
    )
  }

}

export default Contact;
