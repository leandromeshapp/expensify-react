import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import replaceAll from '../utils/replaceAll';

//export const Footer = ({ currentUser }) => (
export class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      providerId: "",
      displayName: "",
      email: "",
      photoURL: "",
      error: ""
    }
  }


  componentWillMount() {
    this.setState({
        ...this.state,
        providerId: this.props.providerId,
        displayName: this.props.displayName,
        email: this.props.email,
        photoURL: this.props.photoURL
    })
}

  render() {
    const {dictionary} = this.props
    return (  
      <div>
        <footer className="footer">
          <div className="content-container">
            <div className="footer__content">
              <span className="footer__title">
              
                <h4 className="footer__message"
                dangerouslySetInnerHTML={{
                  __html: replaceAll(dictionary.footerMessage, {
                  "{p1}": this.state.displayName,
                  "{p2}": this.state.providerId == "google.com" && "Google" || 
                  this.state.providerId == "password" && "E-mail: " || 
                  this.state.providerId == "github.com" && "GitHub: " || 
                  this.state.providerId == "facebook.com" && "Facebook: " || 
                  this.state.providerId == "twitter.com" && "Twitter: ",
                  "{p3}": "&lt;" + this.state.email + "&gt;"
                  })
                  }}>
              </h4>
              {this.state.email}
                {this.state.displayName}
                &nbsp;you're logged in via{' '}
                
                { this.state.providerId &&
                  console.log("Provider Id on footer is: ", this.state.providerId)
                }
                { this.state.providerId == "google.com" &&
                  "Google: "
                }
                
                { this.state.providerId == "github.com" &&
                  "GitHub: "
                }

                { this.state.providerId == "facebook.com" &&
                  "Facebook: "
                }
      
                { this.state.providerId == "twitter.com" &&
                  "Twitter: "
                }

                { this.state.providerId == "password" &&
                  "E-mail: "
                }


                &lt;{this.state.email}&gt;
              </span>

                {!this.state.photoURL &&
                  <img className='header__user-avatar' src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />
                }
                { this.state.photoURL &&
                  <img className='header__user-avatar' src={this.state.photoURL} alt="Avatar" />
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
  displayName: state.auth.displayName,
  email: state.auth.email,
  photoURL: state.auth.photoURL,


  locale: state.lang.locale,
  dictionary: state.lang.dictionary
});


export default connect(mapStateToProps)(Footer);
