import React from 'react'
import { Auth } from './components/auth/auth';
import { Main } from './components/main/main';
import './style.scss'

function App() {
    const [path, setPath] = React.useState('login')

    return ( 
    <div className = "App" >
        {path==='login' | path==='register' ? 
        <Auth props={{path, setPath}}/> : 
        <Main props={{path, setPath}}/>}
    </div>
    );
}

export default App;