import React from 'react';
import { connect } from 'react-redux';
//import { startLogin, startLoginEmail, createLoginEmail, startLoginGoogle } from '../actions/auth';

import { Button } from 'react-bootstrap';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
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


  onSubmit = (e) => {
    e.preventDefault();
    this.props.startLoginEmailProp(this.state.email, this.state.password).then((resErr) => {
      throw resErr;
    }).catch((err) => {
      if (err.code === 'auth/invalid-email') {
        this.setState(() => ({ emailError: 'Invalid email format' }));
      }
      if (this.state.password.length < 6) {
        this.setState(() => ({ passwordError: 'Passwords must be at least six characters' }));
      } else if (err.code !== 'auth/invalid-email' && this.state.password.length >= 6) {
        if (err.code === 'auth/wrong-password') {
          return this.props.startLoginGoogleProp();
        }
        return this.setState(() => ({ generalError: 'Invalid login' }));
      }
      return undefined;
    });
  }

  render() {
    return (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expensify</h1>
            <p>It's time to get your expenses under controlsss</p>
    
            <br/>
            <br/>
            <h1> Register Account </h1>
            <form onSubmit={this.onSubmit} >
            <input
                className="form-control"
                type="text"
                placeholder="Nome"
                autoFocus
                value={this.state.name}
                onChange={this.onNameChange}
            />
            <br/>
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

            <input
                className="form-control"
                type="password"
                placeholder="Repeat Password"
                value={this.state.repeatPassword}
                onChange={this.onRepeatPasswordChange}
            />

            <br/>
            <Button bsStyle="primary" type="submit"> Register </Button> 
            </form>
        </div>
    </div>
    );
  }
}

// );


const mapDispatchToProps = (dispatch) => ({
    startLogin: (provider) => dispatch(startLogin(provider)),
    startLoginGoogleProp: () => dispatch(startLoginGoogle()),
    startLoginEmailProp: (email, password) => dispatch(startLoginEmail(email, password)),
});

//export default connect(undefined, mapDispatchToProps)(LoginPage);
export default Register;
