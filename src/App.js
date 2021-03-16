import React from 'react'
import { Login } from "./components/login/login";
import { Main } from './components/main/main';
import { Register } from "./components/register/register";
import './style.scss'

function App() {
    const [path, setPath] = React.useState('login')

    return ( 
    <div className = "App" >
        {path==='login' && <Login props={{path, setPath}}/>}
        {path==='register' && <Register props={{path, setPath}}/>}
        {path==='main' | path ==='profile' && <Main props={{path, setPath}}/>}
    </div>
    );
}

export default App;