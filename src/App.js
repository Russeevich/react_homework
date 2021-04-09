import React from 'react'
import Auth from './components/auth/auth';
import { Redirect, Switch, Route } from 'react-router-dom';
import './style.scss'
import PrivateRoute from './privateRoute';
import Map from './components/map/map';
import Profile from './components/profile/profile';

function App() {
    return ( 
    <div className = "App" >
        <Switch >
            <Route path = "/login" component = { Auth }/> 
            <Route path = "/register" component = { Auth }/> 
            <PrivateRoute path = "/map" comp = { Map }/> 
            <PrivateRoute path = "/profile" comp = { Profile }/> 
            <Redirect from = '/' to = '/login' />
        </Switch> 
    </div>
    );
}

export default App;