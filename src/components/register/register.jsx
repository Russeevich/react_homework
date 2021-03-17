import { RightBar } from '../rightbar/rightbar';



export const Register = ({props}) =>{
    return (<>
        <RightBar props={{title: 'Регистрация', inputs: [
            {title: 'Email', placeholder: 'mail@mail.ru'},
            {title: 'Как вас зовут?*', placeholder: 'Петр Александрович'},
            {title: 'Придумайте пароль*', placeholder: '************'}
        ], login: 'Уже зарегестрированны?', ...props}}/>
        </>
    )
}