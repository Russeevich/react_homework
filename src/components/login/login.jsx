import {  AuthForm } from '../authform/authform';


export const Login = ({props}) =>{
    return (
        <AuthForm props={{title: 'Войти', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Пароль', placeholder: '************'}
        ], link: 'Забыли пароль?', register: 'Новый пользователь?', ...props}}/>
    )
}