import React from 'react'
import './leftbar.scss'
import photo from '../../assets/img/logo.png'
import text from '../../assets/img/logotext.png'


export const LeftBar = ( ) =>{
    return(
        <section className="leftbar">
            <div className="leftbar__inner">
                <img src={photo} alt="" className="leftbar__img"/>
                <img src={text} alt="" className="leftbar__text"/>
            </div>
        </section>
    )
}