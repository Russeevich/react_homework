import './topbar.scss'
import logo from '../../assets/img/logo.png'
import text from '../../assets/img/logotext.png'

export const TopBar = ({props}) =>{

    const changePath = (e, path) =>{
        e.preventDefault()
        props.setPath(path)
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
                        <a href="/map" onClick={e => changePath(e, 'map')} className={props.path === 'map' ? "nav__link active" :"nav__link"}>Карта</a>
                    </li>
                    <li className="nav__item">
                        <a href="/profile" onClick={e => changePath(e, 'profile')} className={props.path === 'profile' ? "nav__link active" :"nav__link"}>Профиль</a>
                    </li>
                    <li className="nav__item">
                        <a href="/logout" onClick={e => changePath(e, 'login')} className={props.path === 'logout' ? "nav__link active" :"nav__link"}>Выйти</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}