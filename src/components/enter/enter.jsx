import { Login } from "../login/login";
import { Register } from "../register/register";
import { LeftBar } from '../leftbar/leftbar'
import '../login/login.scss';


export const Enter = ({props}) =>{
    return(
    <section className="login">
        <LeftBar/>
        {props.path==='login' && <Login props={props}/>}
        {props.path==='register' && <Register props={props}/>}
    </section>
    )
}