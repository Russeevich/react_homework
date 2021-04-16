import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import { fetchLoginRequest, fetchRegisterRequest } from '../../modules/auth/actions';
import {Link, Redirect} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import './form.scss'

const Form = (props) =>{

    const { register, formState: { errors }, handleSubmit, watch} = useForm()

    const {isLoggedIn} = props.authReducer

    const loginHandler = (data) =>{

        const {fetchLoginRequest, fetchRegisterRequest} = props

        if(errors)
            return

        if(props.props.register)
        fetchLoginRequest(data)
        else fetchRegisterRequest({email: data.email, password: data.password, name: data.name.split(' ')[0], surname: data.name.split(' ')[1]})
    }

    const ActiveBtn = () =>{
        const login = watch('email'),
        password = watch('password')

        if(login && password && login.length >= 3 && password.length >= 3){
            return true
        }
        return false
    }

    if(isLoggedIn)
        return <Redirect from='/login' to='/map'/>

    return(
        <div className="form">

            <form className="form__inner" onSubmit={handleSubmit(loginHandler)}>

                <h4 className="form__title">{props.props.title}</h4>

                {props.props.inputs.map(item => {

                    return (
                    <div className="form__info" key={item.placeholder}>
                        {errors[item.name] && <div className="form__errors">{item.name} {errors[item.name]?.message}</div>}
                        <TextField 
                        color={errors[item.name] ? "secondary" : "primary"} 
                        data-testid={item.name} 
                        {...register(item.name, 
                        {
                            required: {
                                value: true, message: 'is required'}, 
                                maxLength: {value: 16, message: 'is long'},
                                minLength: {value: 3, message: 'is small'},
                                // pattern: { value: item.name === 'email' ? /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/: '', message: "is not valid"}
                            }
                        )
                        } 
                        label={item.title} 
                        type={item.name === 'password' ? item.name : 'text'} 
                        placeholder={item.placeholder}/>
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