import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginEmail, createLoginEmail, startLoginGoogle, startLoginGithub, startLoginFacebook, startLoginTwitter } from '../actions/auth';
import { Redirect, App, Route, Switch} from "react-router-dom"
import { Button } from 'react-bootstrap';
import { Register } from './Register';
// export const LoginPage = ({ startLogin }) => (

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

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }

  onCreate () {
    <Redirect to = "/Register" />
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.startLoginEmailProp(this.state.email, this.state.password).then((resErr) => {
      throw resErr;
    }).catch((err) => {
      if (err.code === 'auth/invalid-email') {
        this.setState(() => ({ emailError: 'Invalid email format' }));
      }
      if (this.state.password.length < 6) {
        this.setState(() => ({ passwordError: 'Password must be at least six characters' }));
      } else if (err.code !== 'auth/invalid-email' && this.state.password.length >= 6) {
        if (err.code === 'auth/wrong-password') {
          return this.props.startLoginGoogleProp();
        }
        return this.setState(() => ({ generalError: 'Invalid login' }));
      }
      return undefined;
    });
  }


  onCreateLoginEmail = () => {
    this.props.history.push("/Register")
    console.log("yau, fiz push para o register")
}

  render() {
    return (
    <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className='button button--with-icon' onClick={ this.props.startLoginGoogleProp }><i className="icon-prepend fa fa-google"/> Login with Google</button>
      <button className='button button--with-icon' style={{"background":"#4267b2"}} onClick={ this.props.startLoginFacebookProp }><i className="icon-prepend fa fa-facebook-f"/> Login with Facebook</button>
      <button className='button button--with-icon' style={{"background":"#24292e"}} onClick={ this.props.startLoginGithubProp }><i className="icon-prepend fa fa-github"/> Login with Github</button>
      <button className='button button--with-icon' style={{"background":"#1dcaff"}} onClick={ this.props.startLoginTwitterProp }><i className="icon-prepend fa fa-twitter"/> Login with Twitter</button>


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
        <Button bsStyle="primary" type="submit"> Login email </Button> 
        <br/>
        <Button bsStyle="danger" onClick={this.onCreateLoginEmail} > Create Account </Button>
      </div>
    </form>
  </div>
  </div>
    );
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

export default connect(undefined, mapDispatchToProps)(LoginPage);



// import React from "react"
// import { connect } from "react-redux"
// import { startLogin, startLoginEmail } from "../actions/auth"


// export class LoginPage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         email: '',
//         password: '',
//         emailError: '',
//         passwordError: '',
//         generalError: '',
//       };
//     }
//     onEmailChange = (e) => {
//       const email = e.target.value;
//       this.setState(() => ({ email }));
//       this.setState(() => ({ emailError: '', generalError: '' }));
//     }
//     onPasswordChange = (e) => {
//       const password = e.target.value;
//       this.setState(() => ({ password }));
//       this.setState(() => ({ passwordError: '', generalError: '' }));
//     }
//     onSubmit = (e) => {
//       e.preventDefault();
//       this.props.startLoginEmailProp(this.state.email, this.state.password).then((resErr) => {
//         throw resErr;
//       }).catch((err) => {
//         if (err.code === 'auth/invalid-email') {
//           this.setState(() => ({ emailError: 'Invalid email format' }));
//         }
//         if (this.state.password.length < 6) {
//           this.setState(() => ({ passwordError: 'Passwords must be at least six characters' }));
//         } else if (err.code !== 'auth/invalid-email' && this.state.password.length >= 6) {
//           if (err.code === 'auth/wrong-password') {
//             return this.props.startLoginGoogleProp();
//           }
//           return this.setState(() => ({ generalError: 'Invalid login' }));
//         }
//         return undefined;
//       });
//     }


//     render() {
//         return (
//           <div className="box-layout">
//             <div className="box-layout__box">
//               <h1 className=".box-layout__title">Expensify</h1>
//               <p>It's time to get your expenses under control.</p>
//               <form onSubmit={this.onSubmit} >
//                 {this.state.generalError && <span className="form__error">{this.state.generalError}</span>}
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   autoFocus
//                   value={this.state.email}
//                   onChange={this.onEmailChange}
//                   className={this.state.emailError || this.state.generalError ? "text-input login-spacing-error form-box-error " : "text-input login-spacing"}
//                 />
//                 {this.state.emailError && <span className="form__error">{this.state.emailError}</span>}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   value={this.state.password}
//                   onChange={this.onPasswordChange}
//                   className={this.state.passwordError || this.state.generalError ? "text-input login-spacing-error form-box-error " : "text-input login-spacing"}
//                 />
//                 {this.state.passwordError && <span className="form__error">{this.state.passwordError}</span>}
//                 <div
//                   className="login-create-account-div"
//                 >
//                   <button className="button-login"> Login </button>
//                   {/* <button className="button-login" onClick={this.onCreateLoginEmail}> Create Account </button> */}
//                 </div>
//               </form>
//               <div className="login-create-account-div">
//                 <button className="loginBtn loginBtn--google" onClick={this.props.startLoginGoogleProp}>Login Google </button>
//               </div>
//             </div>
//           </div>
//         );
//       }
//     }
  
//   const mapDispatchToProps = (dispatch) => ({
//     startLoginGoogleProp: () => dispatch(startLoginGoogle()),
//     startLoginFacebookProp: () => dispatch(startLoginFacebook()),
//     startLoginEmailProp: (email, password) => dispatch(startLoginEmail(email, password)),
//     createLoginEmailProp: (email, password) => dispatch(createLoginEmail(email, password)),
//   });
  
//   export default connect(undefined, mapDispatchToProps)(LoginPage);
  

  ////////////////////////////////////////

// export const LoginPage = ({ startLogin }) => (
    
//     <div className="box-layout">
//         <div className="box-layout__box">
//             <h1 className="box-layout__title"> Expensify </h1>
//             <p> It's time to get your expenses under control. </p>
//             <button className="button" onClick={ () => startLogin('google') }> Login  </button>

//             <input placeholder="username" type="text" /><br/>
//             <input placeholder="password" type="password" /><br/>
//             <button className="button" onClick={ () => startLogin('email') }> Login Username  </button>
//         </div>
//     </div>
// )


// const mapDispatchToProps = (dispatch) => ({
//     startLogin: (provider) => dispatch(startLogin(provider))
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage)