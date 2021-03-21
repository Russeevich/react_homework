import { AuthForm } from '../authform/authform';



export const Register = ({props}) =>{
    return (
        <AuthForm props={{title: 'Регистрация', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Как вас зовут?*', placeholder: 'Петр Александрович'},
            {title: 'Придумайте пароль*', placeholder: '************'}
        ], login: 'Уже зарегестрированны?', ...props}}/>
    )
}