import { Form } from '../form/form'
import '../auth/auth'

export const AuthForm = ({props}) =>{
    return(
        <section className="auth__form">
            <Form props={props}/>
        </section>
    )
}