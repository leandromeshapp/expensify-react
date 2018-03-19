import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const Footer = ( props ) => (
  <footer className="footer">
    <div className="content-container">
      <div className="footer__content">
        <span className="footer__title">
          Logged in via{' '}
          {props.providerId == 'google.com' ? 'Google: ' : 'GitHub: '}
          {props.displayName} &lt;{props.email}&gt;
        </span>
        <img src={props.photoURL} alt="Avatar" />
      </div>
    </div>
  </footer>
);

const mapStateToProps = (state) => ({
  providerId: state.auth.providerId,
  email: state.auth.email,
  userName: state.auth.displayName,
  photoURL: state.auth.photoURL
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