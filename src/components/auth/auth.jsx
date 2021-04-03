import  Login  from "../login/login";
import  Register  from "../register/register";
import { LogoBar } from '../logobar/logobar';
import {Switch, Route} from 'react-router-dom';
import './auth.scss'


const Auth = () =>{
    return(
    <section className="auth">
        <LogoBar/>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
        </Switch>
    </section>
    )
}

export default Auth