import React from 'react'
import { AuthContext } from '../context/auth/authContext';
import { Map } from "../map/map"
import { Profile } from "../profile/profile"
import TopBar  from "../topbar/topbar"
import PropTypes from 'prop-types'
import './main.scss'


const Main = ({props}) =>{

    const {auth} = React.useContext(AuthContext)


    React.useEffect(() =>{
        if(!auth.isLoggedIn)
            props.setPath('login')
        // eslint-disable-next-line
    }, [])

    return(<>
        <TopBar props={{...props}}/>
        {props.path === 'map' && <Map/>}
        {props.path === 'profile' && <Profile/>}
    </>
    )
}

Main.propTypes = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        setPath: PropTypes.func.isRequired
    })
}

export default Main