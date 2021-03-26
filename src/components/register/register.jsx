import AuthForm from '../authform/authform';
import PropTypes from 'prop-types'


export const Register = ({props}) =>{
    return (
        <AuthForm props={{title: 'Регистрация', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru', name: 'email'},
            {title: 'Как вас зовут?', placeholder: 'Петр Александрович', name: 'name'},
            {title: 'Придумайте пароль', placeholder: '************', name: 'password'}
        ], login: 'Уже зарегестрированны?', ...props}}/>
    )
}

Register.propTypes = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        setPath: PropTypes.func.isRequired
    })
}

export default Register