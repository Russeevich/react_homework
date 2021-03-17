import { RightBar } from '../rightbar/rightbar';


export const Login = ({props}) =>{
    return (<>
        <RightBar props={{title: 'Войти', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Пароль', placeholder: '************'}
        ], link: 'Забыли пароль?', register: 'Новый пользователь?', ...props}}/>
        </>
    )
}