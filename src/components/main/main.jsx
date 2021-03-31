import React from 'react'
import { Map } from "../map/map"
import Profile from "../profile/profile"
import {connect} from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import './main.scss'


const Main = (props) =>{

    const {isLoggedIn, authStatus} = props.authReducer

    if(!authStatus.success || !authStatus.token || !isLoggedIn)
        return <Redirect to='/register'/>
    
    return(<>
        <Switch>
            <Route path="/map" component={Map}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    </>
    )
}

const mapStateToprops = state => state


export default connect(mapStateToprops, null)(Main)