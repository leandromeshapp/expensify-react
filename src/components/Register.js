import React from 'react';
import { connect } from 'react-redux';
import { createLoginEmail } from '../actions/auth';
import validator from 'validator';
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

  backHome = () => {
    this.props.history.push("/")
}

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }

  onRepeatPasswordChange = (e) => {
    const repeatPassword = e.target.value;
    this.setState(() => ({ repeatPassword }));
  }

  onCreateLoginEmail = (e) => {
    e.preventDefault();
    this.setState(() => ({ emailError: '' , passwordError: '' }));


    if (validator.isEmail(this.state.email) && this.state.password.length >= 6) {
      return this.props.createLoginEmailProp(this.state.email, this.state.password).then((resErr) => {
        if (resErr.code === 'auth/email-already-in-use') {
          console.log('sahdgsjfgkksdjhfgdhjsagfjdgsahjfasdjfkghsad');
          return this.props.startLoginGoogleProp();
        }
        return undefined;
      });
    }
    if (!validator.isEmail(this.state.email)) {
      this.setState(() => ({ emailError: 'Invalid email' }));
    }
    if (this.state.password.length < 6) {
      this.setState(() => ({ passwordError: 'Passwords must be at least six characters' }));
    }
    return undefined;
  }

  render() {
    return (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1> Register Account </h1>
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
                //className="form-control"
                className={this.state.emailError || this.state.generalError ? "form-control login-spacing-error form-box-error " : "form-control login-spacing"}
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
            />
            {this.state.emailError && <span className="form__error">{this.state.emailError}</span>}
            <br/>
            <input
                className="form-control"
                className={this.state.passwordError || this.state.generalError ? "form-control login-spacing-error form-box-error " : "form-control login-spacing"}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
            />
            {this.state.passwordError && <span className="form__error">{this.state.passwordError}</span>}
            <br/>
            <input
                className="form-control"
                type="password"
                placeholder="Repeat Password"
                value={this.state.repeatPassword}
                onChange={this.onRepeatPasswordChange}
            />

            <br/>
            <Button bsStyle="primary" onClick={this.onCreateLoginEmail}> Register </Button>
            <br/>
            <Button bsStyle="danger" onClick={this.backHome}> Home </Button>
        </div>
    </div>
    );
  }
}

// );


const mapDispatchToProps = (dispatch) => ({
    createLoginEmailProp: (email, password) => dispatch(createLoginEmail(email, password)),
});

export default connect(undefined, mapDispatchToProps)(Register);
//export default Register;
