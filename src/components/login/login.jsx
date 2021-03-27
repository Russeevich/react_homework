import  AuthForm  from '../authform/authform';
import PropTypes from 'prop-types'


const Login = ({props}) =>{
    return (
        <AuthForm props={{title: 'Войти', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru', name: 'email'},
            {title: 'Пароль', placeholder: '************', name: 'password'}
        ], link: 'Забыли пароль?', register: 'Новый пользователь?', ...props}}/>
    )
}

Login.propTypes = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        setPath: PropTypes.func.isRequired
    })
}

export default Login