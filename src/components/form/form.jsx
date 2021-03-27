import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../context/auth/authContext';
import './form.scss'

const Form = ({props}) =>{

    const {login} = React.useContext(AuthContext)

    const [state, setState] = React.useState({
        email: '',
        password: '',
        name: null
    })

    const ActiveBtn = () =>{
        if(state.email.length > 1 && state.password.length > 1){
            return true
        } 
        return false
    }

    const changeValue = (e, name) =>{
        let obj = {}
        obj[name] = e.target.value

        setState({...state, ...obj})
    }

    const changePath = (e, path) =>{
        e.preventDefault()
        props.setPath(path)
    }

    const loginHandler = (e, path) =>{
        login(state.email, state.password)
        changePath(e, path)
    }

    return(
        <div className="form">

            <form className="form__inner" onSubmit={e => loginHandler(e, 'map')}>

                <h4 className="form__title">{props.title}</h4>

                {props.inputs.map(item => {

                    return (
                    <div className="form__info" key={item.placeholder}>
                        <TextField data-testid={item.name} onChange={(e) => changeValue(e, item.name)} label={item.title} placeholder={item.placeholder} required/>
                    </div>
                    )
                })}
                {props.link && 
                <div className="form__links">
                    <a href="/links" className="form__link">{props.link}</a>
                </div>}

                <Button variant="contained" color="primary" type="submit" className={ActiveBtn() ? "form__btn" : "form__btn Mui-disabled"}>{props.title}</Button>

                <div className="form__links center form__register">
                    <div className="form__linked">
                    {props.register}{props.login}
                    {props.register && <a href="/links" onClick={e => changePath(e, 'register')} className="form__link register">Регистрация</a>}
                    {props.login && <a href="/links" onClick={e => changePath(e, 'login')} className="form__link register">Войти</a>}
                    </div>
                </div>
            

            </form>

        </div>
    )
}


Form.propTypes = {
    props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        inputs: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                placeholder: PropTypes.string.isRequired,
                name: PropTypes.string   
            }).isRequired
        ).isRequired,
        link: PropTypes.string,
        register: PropTypes.string,
        login: PropTypes.string
    })
}

export default Form