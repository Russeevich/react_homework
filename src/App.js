import React from 'react'
import Auth  from './components/auth/auth';
import { Redirect, Switch, Route } from 'react-router-dom';
import Main from './components/main/main';
import './style.scss'

function App() {
    return (
        <div className = "App" >
            <Switch>
                <Route path="/login" component={Auth}/>
                <Route path="/register" component={Auth}/>
                <Route path="/map" component={Main}/>
                <Route path="/profile" component={Main}/>
                <Redirect from='/' to='/login'/>
            </Switch>
        </div>
    );
}

export default App;