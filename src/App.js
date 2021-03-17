import React from 'react'
import { Enter } from './components/enter/enter';
import { Main } from './components/main/main';
import './style.scss'

function App() {
    const [path, setPath] = React.useState('login')

    return ( 
    <div className = "App" >
        {path==='login' | path==='register' ? 
        <Enter props={{path, setPath}}/> : 
        <Main props={{path, setPath}}/>}
    </div>
    );
}

export default App;