import React from 'react'
import text from '../../assets/img/logotext.png'
import logo from '../../assets/img/logo.png'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutFromApp } from '../../modules/auth/actions';
import './topbar.scss'

const TopBar = (props) =>{

    const {path} = props.props.match
    

    const logout = (e) =>{
        const {logoutFromApp} = props
        logoutFromApp({})
        e.preventDefault()
    }

    return(
        <header className="topbar">
            <div className="topbar__inner">
                <div className="topbar__logo">
                    <img src={logo} alt="" className="topbar__img"/>
                    <img src={text} alt="" className="topbar__img--text"/>
                </div>
                <ul className="nav">
                    <li className="nav__item">
                        <Link to='/map'>
                            <Button data-testid="map" className={path === '/map' ? "nav__link active" :"nav__link"}>Карта</Button>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/profile'>
                            <Button data-testid="profile" className={path === '/profile' ? "nav__link active" :"nav__link"}>Профиль</Button> 
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Button data-testid="logout" onClick={e => logout(e)} className="nav__link">Выйти</Button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

const mapDispatchToprops = {logoutFromApp}

export default connect(null, mapDispatchToprops)(TopBar)