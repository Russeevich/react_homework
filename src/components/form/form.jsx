import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import { fetchLoginRequest, fetchRegisterRequest } from '../../modules/auth/actions';
import {Link, Redirect} from 'react-router-dom'
import './form.scss'

const Form = (props) =>{

    const [state, setState] = React.useState({
        email: '',
        password: '',
        name: null
    })

    const {isLoggedIn} = props.authReducer

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

    const loginHandler = (e) =>{
        e.preventDefault()

        const {fetchLoginRequest, fetchRegisterRequest} = props

        if(props.props.register)
        fetchLoginRequest({email: state.email, password: state.password})
        else fetchRegisterRequest({email: state.email, password: state.password, name: state.name.split(' ')[0], surname: state.name.split(' ')[1]})
    }

    if(isLoggedIn)
        return <Redirect from='/login' to='/map'/>

    return(
        <div className="form">

            <form className="form__inner" onSubmit={e => loginHandler(e)}>

                <h4 className="form__title">{props.props.title}</h4>

                {props.props.inputs.map(item => {

                    return (
                    <div className="form__info" key={item.placeholder}>
                        <TextField data-testid={item.name} onChange={(e) => changeValue(e, item.name)} label={item.title} type={item.name === 'password' ? item.name : 'text'} placeholder={item.placeholder} required/>
                    </div>
                    )
                })}
                {props.props.link && 
                <div className="form__links">
                    <a href="/links" className="form__link">{props.props.link}</a>
                </div>}

                <Button data-testid="register_login" variant="contained" color="primary" type="submit" className={ActiveBtn() ? "form__btn" : "form__btn Mui-disabled"}>{props.props.title}</Button>

                <div className="form__links center form__register">
                    <div className="form__linked">
                    {props.props.register}{props.props.login}
                    {props.props.register && <Link from='/login' to='/register' data-testid="register_form" className="form__link register">Регистрация</Link>}
                    {props.props.login && <Link from='/rigister' to='/login' data-testid="login_form" className="form__link register">Войти</Link>}
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
const mapStateToprops = state => state

const mapDispatchToprops = {fetchLoginRequest, fetchRegisterRequest}

export default connect(mapStateToprops, mapDispatchToprops)(Form)