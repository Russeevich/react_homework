import  Login  from "../login/login";
import  Register  from "../register/register";
import { LogoBar } from '../logobar/logobar';
import PropTypes from 'prop-types'
import './auth.scss'


const Auth = ({props}) =>{
    return(
    <section className="auth">
        <LogoBar/>
        {props.path==='login' && <Login props={props}/>}
        {props.path==='register' && <Register props={props}/>}
    </section>
    )
}


Auth.propTypes = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        setPath: PropTypes.func
    })
}

export default Auth