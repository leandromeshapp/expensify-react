import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//export const Footer = ({ currentUser }) => (
export class Footer extends React.Component {
  render() {
    let providerIdLET = this.props.providerId
    let emailLET = this.props.email
    let photoURLLET = this.props.photoURL
    let displayNameLET = this.props.displayName

    return (  
      <div>
        <footer className="footer">
          <div className="content-container">
            <div className="footer__content">
              <span className="footer__title">
                { displayNameLET }
                &nbsp;you're logged in via{' '}
                
                { providerIdLET &&
                  console.log("teste: ",providerIdLET)
                }
                { providerIdLET == "google.com" &&
                  "Google: "
                }
                
                { providerIdLET == "github.com" &&
                  "GitHub: "
                }

                { providerIdLET == "facebook.com" &&
                  "Facebook: "
                }
      
                { providerIdLET == "twitter.com" &&
                  "Twitter: "
                }

                { providerIdLET == "password" &&
                  "E-mail: "
                }


                &lt;{emailLET}&gt;
              </span>

                {!photoURLLET &&
                  <img className='header__user-avatar' src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />
                }
                { photoURLLET &&
                  <img className='header__user-avatar' src={photoURLLET} alt="Avatar" />
                }
              
            </div>
          </div>
      </footer>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  providerId: state.auth.providerId,
  currentUser: state.auth.currentUser,
  displayName: state.auth.displayName,
  email: state.auth.email,
  photoURL: state.auth.photoURL,
});

//export default Footer;
export default connect(mapStateToProps)(Footer);



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

// export const Footer = ( props ) => (
//   <footer className="footer">
//   <div className="content-container">
//     <div className="footer__content">
//       <span className="footer__title">
//         Logged in via{' '}
//         {/* {props.providerId == 'firebase' ? 'Google: ' : 'E-mail: '} */}
//         {props.displayName} &lt;{props.email}&gt;
//       </span>
//       <img src={`${props.photoURL}?sz=30`} alt="Avatar" />
//     </div>
//   </div>
// </footer>
// );

// const mapStateToProps = (state) => ({
//   //providerId: state.auth.providerId,
//   email: state.auth.email,
//   userName: state.auth.displayName,
//   photoURL: state.auth.photoURL
// });

// //export default Footer;
// export default connect(mapStateToProps)(Footer);