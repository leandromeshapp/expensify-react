import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { startAddProfileInfo } from "../actions/user"
import { startLogout } from "../actions/auth"

import { setLanguage } from '../actions/lang'


export const Header = ({ id, startLogout, currentUser, setLanguage, dictionary, locale }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to ="/dashboard">
                    <h1> Expensify </h1>
                </Link>

                <div className='header__user'>
                    <div className="header__language">
                        <button className="button button-lang" onClick={() => {
                        if(locale == 'en')
                            setLanguage('pt')
                        else
                            setLanguage('en');
                        }}>{locale == 'pt' ? 'PT' : 'EN'}</button>
                    </div>

                    <span className='header__user-name'>
                    { currentUser.displayName || currentUser.email }
                    </span>

                    
                    <Link className="header__photo" to ={`/profile`} >
                    <div className="footer__content">
                        {currentUser.photoURL &&
                            <img className='header__user-avatar' src={`${currentUser.photoURL}`} />
                        }
                        {!currentUser.photoURL &&
                            <img className='header__user-avatar' src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg" />
                        }
                        
                    </div>
                    </Link>
                    
                    <button className='button button--link' onClick={ startLogout }> {dictionary.logoutButton} </button>
                </div>

            </div>
            </div>
        <br/>
    </header>
)


const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
    locale: state.lang.locale,
    dictionary: state.lang.dictionary
});


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    setLanguage: (language) => dispatch(setLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)