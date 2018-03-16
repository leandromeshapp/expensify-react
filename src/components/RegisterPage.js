// import React from 'react';
// import { connect } from 'react-redux';
// import { createLoginEmail } from '../actions/auth';
// import validator from 'validator';
// import { Button } from 'react-bootstrap';


// export class Register extends React.Component {
//     render() {
//         return (  
//             <div className="limiter">
// 		        <div className="container-login100">
// 			        <div className="wrap-login100">
// 				        <div className="login100-pic js-tilt" data-tilt>
// 					        <img src="images/img-01.png" alt="IMG" />
// 				    </div>

// 				<form class="login100-form validate-form">
// 					<span class="login100-form-title">
// 						Register Area
// 					</span>

//                     <div class="wrap-input100 validate-input">
// 					    <input class="input100" type="text" name="nome" placeholder="Nome" />
// 						<span class="focus-input100"></span>
// 						<span class="symbol-input100">
// 						<i class="fa fa-user" aria-hidden="true"></i>
// 						</span>
// 					</div>


// 					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
// 					    <input class="input100" type="text" name="email" placeholder="Email" />
// 						<span class="focus-input100"></span>
// 						<span class="symbol-input100">
// 						<i class="fa fa-envelope" aria-hidden="true"></i>
// 						</span>
// 					</div>

// 					<div class="wrap-input100 validate-input" data-validate = "Password is required">
// 						<input className="input100" type="password" name="pass" placeholder="Password" />
// 						<span className="focus-input100"></span>
// 						<span className="symbol-input100">
// 						<i className="fa fa-lock" aria-hidden="true"></i>
// 						</span>
// 					</div>


//                     <div class="wrap-input100 validate-input" data-validate = "Password is required">
// 						<input className="input100" type="passwordrep" name="pass" placeholder="Repeat Password" />
// 						<span className="focus-input100"></span>
// 						<span className="symbol-input100">
// 						<i className="fa fa-lock" aria-hidden="true"></i>
// 						</span>
// 					</div>
					
// 					<div class="container-login100-form-btn">
// 						<button className="login100-form-btn">
// 							Login
// 						</button>
// 					</div>

// 					<div class="text-center p-t-12">
// 						<span className="txt1">
// 							Forgot&ensp;
// 						</span>
// 						<a className="txt2" href="#">
// 						    Username / Password?
// 						</a>
// 					</div>

// 					<div className="text-center p-t-136">
// 						<a className="txt2" href="#">
// 							Create your Account
// 						    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
// 						</a>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	</div>
	
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     createLoginEmailProp: (email, password) => dispatch(createLoginEmail(email, password)),
// });

// export default connect(undefined, mapDispatchToProps)(Register)