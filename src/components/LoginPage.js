import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginEmail, createLoginEmail, startLoginGoogle, startLoginGithub, startLoginFacebook, startLoginTwitter } from '../actions/auth';
import { Redirect, App, Route, Switch} from "react-router-dom"
import { Button } from 'react-bootstrap'
import { Register } from './Register'
// export const LoginPage = ({ startLogin }) => (
import { setLanguage } from '../actions/lang'
let visibility = false

//export const LoginPage = ({ startLoginGoogle, startGithubLogin }) => (
export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      generalError: '',
    };
  }

  toggleVisibility = () => {
    visibility = !visibility

    this.forceUpdate()
  }

  changeLanguage = (e) => {
    const language = e.target.value
    console.log(language)
    this.props.setLanguage(language)
  };


  onEmailChange = (e) => {
    const email = e.target.value
    this.setState(() => ({ email }))
  }

  onPasswordChange = (e) => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  onCreate () {
    <Redirect to = "/Register" />
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.startLoginEmailProp(this.state.email, this.state.password).then((resErr) => {
      throw resErr
    }).catch((err) => {
      if (err.code === 'auth/invalid-email') {
        this.setState(() => ({ emailError: 'Invalid email format' }))
      }
      if (this.state.password.length < 6) {
        this.setState(() => ({ passwordError: 'Password must be at least six characterss' }))
      } else if (err.code !== 'auth/invalid-email' && this.state.password.length >= 6) {
        if (err.code === 'auth/wrong-password') {
          return console.log(err)
        }
        return this.setState(() => ({ generalError: 'Invalid login' }))
      }
      return undefined
    });
  }


  onCreateLoginEmail = () => {
    this.props.history.push("/Register")
    console.log("yau, fiz push para o register")
}

  visibility = !visibility
  render() {
    const {locale, dictionary} = this.props
    return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify</h1>
        <p>It's time to get your expenses under control</p>
        {/* #dd4b39 */}

        <Button bsStyle="info" onClick={this.toggleVisibility}>
            {visibility ? 'Hide Social Login Options' : 'Show Social Login Options'}
        </Button>

        {visibility && (
          <div>
            <div className="buttonLogin">
              <button className='button button--with-icon' style={{"background":"#dd4b39"}} onClick={ this.props.startLoginGoogleProp }><i className="icon-prepend fa fa-google"/> Login with Google</button>
              <button className='button button--with-icon' style={{"background":"#4267b2"}} onClick={ this.props.startLoginFacebookProp }><i className="icon-prepend fa fa-facebook-f"/> Login with Facebook</button>
              <button className='button button--with-icon' style={{"background":"#24292e"}} onClick={ this.props.startLoginGithubProp }><i className="icon-prepend fa fa-github"/> Login with Github</button>
              <button className='button button--with-icon' style={{"background":"#1dcaff"}} onClick={ this.props.startLoginTwitterProp }><i className="icon-prepend fa fa-twitter"/> Login with Twitter</button>
            </div>
          </div>
        )}


        {/* <div className="buttonLogin">
          <button className='button button--with-icon' style={{"background":"#dd4b39"}} onClick={ this.props.startLoginGoogleProp }><i className="icon-prepend fa fa-google"/> Login with Google</button>
          <button className='button button--with-icon' style={{"background":"#4267b2"}} onClick={ this.props.startLoginFacebookProp }><i className="icon-prepend fa fa-facebook-f"/> Login with Facebook</button>
          <button className='button button--with-icon' style={{"background":"#24292e"}} onClick={ this.props.startLoginGithubProp }><i className="icon-prepend fa fa-github"/> Login with Github</button>
          <button className='button button--with-icon' style={{"background":"#1dcaff"}} onClick={ this.props.startLoginTwitterProp }><i className="icon-prepend fa fa-twitter"/> Login with Twitter</button>
        </div> */}

        <br/>
        <br/>
        <h1>E-mail Login </h1>
        <form onSubmit={this.onSubmit} >
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          autoFocus
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <br/>
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onPasswordChange}
        />

      <br/>
      <div className="botaoMargin">
        <Button bsStyle="primary" type="submit"> {dictionary.loginButton} </Button> 
        <br/>
        <Button bsStyle="danger" onClick={this.onCreateLoginEmail} > {dictionary.registerButton} </Button>

        <select className="select" value={locale} onChange={this.changeLanguage}>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
        </select>

      </div>
    </form>
  </div>
  </div>
    )
  }
}
// )

// );


const mapDispatchToProps = (dispatch) => ({
  startLoginGoogleProp: () => dispatch(startLoginGoogle()),
  startLoginGithubProp: () => dispatch(startLoginGithub()),
  startLoginFacebookProp: () => dispatch(startLoginFacebook()),
  startLoginTwitterProp: () => dispatch(startLoginTwitter()),
  startLogin: (provider) => dispatch(startLogin(provider)),
  //startLoginGoogleProp: () => dispatch(startLoginGoogle()),
  startLoginEmailProp: (email, password) => dispatch(startLoginEmail(email, password)),
});


const mapStateToProps = (state) => ({
  locale: state.lang.locale,
  dictionary: state.lang.dictionary
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)