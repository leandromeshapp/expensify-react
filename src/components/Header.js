import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import { startAddProfileInfo } from "../actions/user"
import { startLogout } from "../actions/auth"


export const Header = ({ id, startLogout, currentUser }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to ="/dashboard">
                    <h1> Expensify </h1>
                </Link>
			apagar
                <div className='header__user'>
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
                    
                    <button className='button button--link' onClick={ startLogout }>Logout</button>
                </div>

            </div>
            </div>
        <br/>
    </header>
)


const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,

    //user: state.expenses.find((expense) => expense.id === props.match.params.id)
});


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),

    startAddProfileInfo: (info) => dispatch(startAddProfileInfo(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)