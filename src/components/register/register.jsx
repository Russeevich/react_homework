import { LeftBar } from '../leftbar/leftbar'
import { RightBar } from '../rightbar/rightbar';
import './register.scss'


export const Register = ({props}) =>{
    return (
    <div className="register">
        <LeftBar/>
        <RightBar props={{title: 'Регистрация', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Как вас зовут?*', placeholder: 'Петр Александрович'},
            {title: 'Придумайте пароль*', placeholder: '************'}
        ], login: 'Уже зарегестрированны?', ...props}}/>
    </div>
    )
}