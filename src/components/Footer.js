import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export const Footer = ({ currentUser }) => (
  <footer className="footer">
    <div className="content-container">
      <div className="footer__content">
        <span className="footer__title">
          { currentUser.displayName } 
          { !currentUser.displayName && 
            "User is that you"
          }
          &nbsp;you're logged in via{' '}
          
          { currentUser.providerId &&
            console.log("teste: ",currentUser)
          }
          { currentUser.providerId == "google.com" &&
            "Google: "
          }
           
          { currentUser.providerId == "github.com" &&
            "GitHub: "
          }

          { currentUser.providerId == "facebook.com" &&
            "Facebook: "
          }
 
          { currentUser.providerId == "twitter.com" &&
            "Twitter: "
          }

          { currentUser.providerId == "firebase" &&
            "E-mail: "
          }

          {/* {props.providerId == 'google.com' ? 'Google: ' : 'GitHub: '} */}

          { currentUser.displayName == "null" &&
            "teste display name"
          }

          &lt;{currentUser.email}&gt;
        </span>
          {!currentUser.photoURL &&
          <img className='header__user-avatar' src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />
          }
        { currentUser.photoURL &&
          <img className='header__user-avatar' src={currentUser.photoURL} alt="Avatar" />
        }
        
      </div>
    </div>
  </footer>
);

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
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