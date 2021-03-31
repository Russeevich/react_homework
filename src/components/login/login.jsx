import  AuthForm  from '../authform/authform';

const Login = () =>{
    return (
        <AuthForm props={{title: 'Войти', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru', name: 'email'},
            {title: 'Пароль', placeholder: '************', name: 'password'}
        ], link: 'Забыли пароль?', register: 'Новый пользователь?'}}/>
    )
}

export default Login