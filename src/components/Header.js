import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { startLogout } from "../actions/auth"


export const Header = ({ startLogout, photoURL, displayName, email }) => (
//export const Header = ({ startLogout, currentUser }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to ="/dashboard">
                    <h1> Expensify </h1>
                </Link>

                <div className='header__user'>
                    <span className='header__user-name'>
                    { displayName || email }
                    </span>
                    <Link className="header__photo" to ={`/profile/${displayName}`} >
                    <div className="footer__content">
                        {photoURL &&
                            <img className='header__user-avatar' src={`${photoURL}`} />
                        }
                        {!photoURL &&
                            <img className='header__user-avatar' src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />
                        }
                        
                    </div>
                    </Link>
                    
                    <button className='button button--link' onClick={ startLogout }>Logout</button>
                </div>

            </div>
            </div>
        <br/>
    </header>
)


const mapStateToProps = (state) => ({
    photoURL: state.auth.photoURL,
    displayName: state.auth.displayName,
    email: state.auth.email,
    //currentUser: state.auth.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
 

export default connect(mapStateToProps, mapDispatchToProps)(Header)