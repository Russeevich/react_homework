import React from 'react'
import './logobar.scss'
import photo from '../../assets/img/logo.png'
import text from '../../assets/img/logotext.png'


export const LogoBar = () =>{
    return(
        <section className="logobar">
            <div className="logobar__inner">
                <img src={photo} alt="" className="logobar__img"/>
                <img src={text} alt="" className="logobar__text"/>
            </div>
        </section>
    )
}