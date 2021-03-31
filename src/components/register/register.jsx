import AuthForm from '../authform/authform';

const Register = () =>{
    return (
        <AuthForm props={{title: 'Регистрация', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru', name: 'email'},
            {title: 'Как вас зовут?', placeholder: 'Петр Александрович', name: 'name'},
            {title: 'Придумайте пароль', placeholder: '************', name: 'password'}
        ], login: 'Уже зарегестрированны?'}}/>
    )
}

export default Register