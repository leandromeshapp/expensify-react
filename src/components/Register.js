import React from 'react';
import { connect } from 'react-redux';
import { createLoginEmail, createDisplayName } from '../actions/auth';
import { startAddProfileInfo} from "../actions/user"
import validator from 'validator';
import { Button } from 'react-bootstrap';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        displayName: '',
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

  ondisplayNameChange = (e) => {
    const displayName = e.target.value;
    this.setState(() => ({ displayName }));
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

    // this.props.startAddProfileInfo(info)

    this.props.createLoginEmailProp(this.state.email, this.state.password)

    this.props.createDisplayNameProp(this.state.displayName)

    // setTimeout(function(){ 
    //  this.props.history.push("/")
    // }, 2000);
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
                value={this.state.displayName}
                onChange={this.ondisplayNameChange}
            />
            <br/>
            <div className="testeSs">
            <input
                //className="form-control"
                className={this.state.emailError || this.state.generalError ? "form-control login-spacing-error form-box-error " : "form-control login-spacing"}
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
            />
            </div>
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
            <Button className="buttonRegister" bsStyle="primary" onClick={ this.onCreateLoginEmail }> Register </Button>
            <br/>
            <br/>
            <Button className="buttonRegister" bsStyle="danger" onClick={this.backHome}> Home </Button>
        </div>
    </div>
    );
  }
}
// );


const mapDispatchToProps = (dispatch) => ({
    createDisplayNameProp: (displayName) => dispatch(createDisplayName( displayName )),
    createLoginEmailProp: (email, password) => dispatch(createLoginEmail( email, password )),

    // startAddProfileInfo: (info) => dispatch(startAddProfileInfo(info))
});

export default connect(undefined, mapDispatchToProps)(Register);
//export default Register;
