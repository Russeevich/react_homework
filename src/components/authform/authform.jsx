import PropTypes from 'prop-types';
import Form  from '../form/form'
import '../auth/auth'

const AuthForm = ({props}) =>{
    return(
        <section className="auth__form">
            <Form props={props}/>
        </section>
    )
}

AuthForm.propTypes = {
    props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        inputs: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                placeholder: PropTypes.string.isRequired,
                name: PropTypes.string   
            }).isRequired
        ).isRequired,
        link: PropTypes.string,
        register: PropTypes.string,
        login: PropTypes.string
    })
}

export default AuthForm