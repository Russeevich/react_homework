import { LeftBar } from '../leftbar/leftbar'
import { RightBar } from '../rightbar/rightbar';
import './login.scss'


export const Login = () =>{
    return (
    <div className="login">
        <LeftBar/>
        <RightBar props={{title: 'Войти', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Пароль', placeholder: '************'}
        ], link: 'Забыли пароль?', register: 'Новый пользователь?'}}/>
    </div>
    )
}