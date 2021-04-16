import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({authReducer, comp: Component, ...rest}) =>(
    <Route {...rest} render={props =>(
        authReducer.isLoggedIn ? <Component {...props}/> : <Redirect to='/register'/>
    )}/>
)

const mapStateToprops = state => state

export default connect(mapStateToprops, null)(PrivateRoute)