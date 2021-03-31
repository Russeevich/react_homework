import React from 'react';
import { TextField } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';
import logo from '../../assets/img/logo.png'
import chip from '../../assets/img/chip.png'
import Button from '@material-ui/core/Button';
import TopBar  from "../topbar/topbar"
import {connect} from 'react-redux'
import './profile.scss'
import { fetchCardRequest, getCardRequest } from '../../modules/card/actions';

const Profile = (props) =>{

    const { card } = props.cardReducer

    const [state, setState] = React.useState(card)

    React.useEffect(() =>{
        if(card.cardNumber.length < 1){
            const {token} = props.authReducer.authStatus,
                  {getCardRequest} = props
            getCardRequest({token: token})
        }
        // eslint-disable-next-line
    }, [])

    React.useEffect(() =>{
        setState(card)
    }, [card])

    const changeDate = (e) =>{
        e.preventDefault()

        const newVal = e.target.value,
            parseVal = newVal.split('/').join(''),
            maxLen = 4

        if(newVal.split('/')[0] > 12 || newVal.split('')[0] > 1 || parseVal.length > maxLen || isNaN(parseVal))
            return

        if(parseVal.length % 2 === 0 && newVal.length > state.expiryDate.length && parseVal.length < maxLen){
            setState({...state, expiryDate: `${newVal}/`})
        } else {
            setState({...state, expiryDate: newVal})
        }
    }

    const changeCardName = (e) =>{
        e.preventDefault()
        const newVal = e.target.value

        setState({...state, cardName: newVal})
    }

    const changeCardNumber = (e) =>{
        e.preventDefault()

        const newVal = e.target.value,
            parseVal = newVal.split(' ').join(''),
            maxLen = 16
        
        if(parseVal.length > maxLen || isNaN(parseVal))
            return

        if(parseVal.length % 4 === 0 && newVal.length > state.cardNumber.length && parseVal.length < maxLen){
            setState({...state, cardNumber: `${newVal} `})
        } else {
            setState({...state, cardNumber: newVal})
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

    const submitForm = (e) =>{
        e.preventDefault()

        const {fetchCardRequest} = props,
              {token} = props.authReducer.authStatus

        fetchCardRequest({...state, token: token})
    }

    return(<>
        <TopBar props={{...props}}/>
        <section className="profile">

            <div className="profile__inner">

                <h4 className="profile__title">Профиль</h4>
                <h6 className="profile__subtitle">Введите платежные данные</h6>

                <form action="" className="profile__form" onSubmit={e => submitForm(e)}>

                    <div className="profile__info">

                        <div className="profile__data">
                            <TextField value={state.cardName} onChange={e=>changeCardName(e)} className="profile__input" label="Имя владельца" placeholder="Введите имя" required/>
                            <TextField value={state.cardNumber} onChange={e=> changeCardNumber(e)} className="profile__input" label="Номер карты" placeholder="0000 0000 0000 0000" required/>
                            <div className="profile__number">
                                <TextField value={state.expiryDate} onChange={e=> changeDate(e)} className="profile__input" label="MM/YY" placeholder="01/01" required/>
                                <TextField value={state.cvc} onChange={e=> changeCVC(e)} className="profile__input" label="CVC" placeholder="000" required/>
                            </div>
                        </div>

                        <div className="card">

                            <div className="card__inner">

                                <div className="card__top">
                                    <img src={logo} alt="" className="card__logo"/>
                                    <span className="card__date">{getCardInfo('01/01', state.expiryDate)}</span>
                                </div>

                                <div className="card__center">
                                    <span className="card__number">{getCardInfo('0000 0000 0000 0000', state.cardNumber)}</span>
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
    </>
    )
}

const mapStateToprops = state => state

const mapDispatchToprops = {fetchCardRequest, getCardRequest}

export default connect(mapStateToprops, mapDispatchToprops)(Profile)