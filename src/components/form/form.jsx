import React from 'react'
import './form.scss'

export const Form = ({props}) =>{
    React.useEffect(() => {
        const inputs = document.querySelectorAll('.form__input')

        inputs.forEach(item=>{
            item.addEventListener('change', e =>{
                const label = e.target.nextSibling
                if(e.target.value)
                label.classList.add('active')
                else  label.classList.remove('active')
            })
        })
    })

    return(
        <div className="form">

            <form className="form__inner">

                <h4 className="form__title">{props.title}</h4>

                {props.inputs.map(item => {
                    return (
                    <div className="form__info" key={item.placeholder}>
                        <input className="form__input" placeholder={item.placeholder}></input>
                        <label htmlFor="" className="form__label">{item.title}</label>
                    </div>
                    )
                })}
                {props.link && 
                <div className="form__links">
                    <a href="/links" className="form__link">{props.link}</a>
                </div>}

                <button className="form__btn">{props.title}</button>

                <div className="form__links center form__register">
                    <div className="form__linked">{props.register} {props.register && <a href="/links" className="form__link register">Регистрация</a>}</div>
                </div>
            

            </form>

        </div>
    )
}