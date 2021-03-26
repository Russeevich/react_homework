import React from 'react'
import { AuthContext } from '../context/auth/authContext';
import text from '../../assets/img/logotext.png'
import logo from '../../assets/img/logo.png'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';
import './topbar.scss'

const TopBar = ({props}) =>{

    const {logout} = React.useContext(AuthContext)

    
    const changePath = (e, path) =>{
        e.preventDefault()
        props.setPath(path)
    }
    
    const logoutHandler = (e, path) =>{
        logout()
        changePath(e, path)
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
                        <Button onClick={e => changePath(e, 'map')} className={props.path === 'map' ? "nav__link active" :"nav__link"}>Карта</Button>
                    </li>
                    <li className="nav__item">
                        <Button onClick={e => changePath(e, 'profile')} className={props.path === 'profile' ? "nav__link active" :"nav__link"}>Профиль</Button>
                    </li>
                    <li className="nav__item">
                        <Button onClick={e => logoutHandler(e, 'login')} className={props.path === 'logout' ? "nav__link active" :"nav__link"}>Выйти</Button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

TopBar.propTypes = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        setPath: PropTypes.func.isRequired
    })
}

export default TopBar