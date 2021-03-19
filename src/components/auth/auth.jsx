import { Login } from "../login/login";
import { Register } from "../register/register";
import { LogoBar } from '../logobar/leftbar';
import './auth.scss'


export const Auth = ({props}) =>{
    return(
    <section className="auth">
        <LogoBar/>
        {props.path==='login' && <Login props={props}/>}
        {props.path==='register' && <Register props={props}/>}
    </section>
    )
}