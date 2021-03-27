import React from 'react';
import { TextField } from '@material-ui/core';
import {MCIcon} from 'loft-taxi-mui-theme';
import logo from '../../assets/img/logo.png'
import chip from '../../assets/img/chip.png'
import Button from '@material-ui/core/Button';
import './profile.scss'

export const Profile = () =>{

    const [state, setState] = React.useState({
        date: '',
        cardnumber: '',
        cvc: ''
    })

    const changeDate = (e) =>{
        e.preventDefault()

        const newVal = e.target.value,
            parseVal = newVal.split('/').join(''),
            maxLen = 4

        if(newVal.split('/')[0] > 12 || newVal.split('')[0] > 1 || parseVal.length > maxLen || isNaN(parseVal))
            return

        if(parseVal.length % 2 === 0 && newVal.length > state.date.length && parseVal.length < maxLen){
            setState({...state, date: `${newVal}/`})
        } else {
            setState({...state, date: newVal})
        }
    }

    const changeCardNumber = (e) =>{
        e.preventDefault()

        const newVal = e.target.value,
            parseVal = newVal.split(' ').join(''),
            maxLen = 16
        
        if(parseVal.length > maxLen || isNaN(parseVal))
            return

        if(parseVal.length % 4 === 0 && newVal.length > state.cardnumber.length && parseVal.length < maxLen){
            setState({...state, cardnumber: `${newVal} `})
        } else {
            setState({...state, cardnumber: newVal})
        }
    }

    const changeCVC = (e) =>{
        e.preventDefault()

        const newVal = e.target.value,
            parseVal = newVal.split(' ').join(''),
            maxLen = 3
        
        if(parseVal.length > maxLen || isNaN(parseVal))
            return

        setState({...state, cvc: newVal})
    }

    const getCardInfo = (placeholder, match) =>{
        let cardnumber = placeholder.split('')

        match.split('').forEach((item, ind) =>{
            cardnumber[ind] = item
        })

        return cardnumber.join('')
    }

    return(
        <section className="profile">

            <div className="profile__inner">

                <h4 className="profile__title">Профиль</h4>
                <h6 className="profile__subtitle">Введите платежные данные</h6>

                <form action="" className="profile__form">

                    <div className="profile__info">

                        <div className="profile__data">
                            <TextField className="profile__input" label="Имя владельца" placeholder="Введите имя" required/>
                            <TextField value={state.cardnumber} onChange={e=> changeCardNumber(e)} className="profile__input" label="Номер карты" placeholder="0000 0000 0000 0000" required/>
                            <div className="profile__number">
                                <TextField value={state.date} onChange={e=> changeDate(e)} className="profile__input" label="MM/YY" placeholder="01/01" required/>
                                <TextField value={state.cvc} onChange={e=> changeCVC(e)} className="profile__input" label="CVC" placeholder="000" required/>
                            </div>
                        </div>

                        <div className="card">

                            <div className="card__inner">

                                <div className="card__top">
                                    <img src={logo} alt="" className="card__logo"/>
                                    <span className="card__date">{getCardInfo('01/01', state.date)}</span>
                                </div>

                                <div className="card__center">
                                    <span className="card__number">{getCardInfo('0000 0000 0000 0000', state.cardnumber)}</span>
                                </div>

                                <div className="card__bottom">
                                    <img src={chip} alt="" className="card__chip"/>
                                    <MCIcon/>
                                </div>

                            </div>

                        </div>
                         
                    </div>

                    <Button variant="contained" color="primary" type="submit" className="form__btn form__btn--card">Сохранить</Button>

                </form>

            </div>

        </section>
    )
}