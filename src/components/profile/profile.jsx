import React from 'react';
import { TextField } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';
import logo from '../../assets/img/logo.png'
import chip from '../../assets/img/chip.png'
import Button from '@material-ui/core/Button';
import TopBar  from "../topbar/topbar"
import {connect} from 'react-redux'
import './profile.scss'
import { fetchCardRequest } from '../../modules/card/actions';
import { Controller, useForm } from 'react-hook-form';

const Profile = (props) =>{

    
    const { card } = props.cardReducer
    
    const { formState: { errors },handleSubmit, setValue, watch, control} = useForm(
        {
            defaultValues:{
                cardNumber: card.cardNumber,
                cardName: card.cardName,
                cvc: card.cvc,
                expiryDate: card.expiryDate
            },
            mode: 'onChange'
        }
    )

    React.useEffect(() =>{
        if(watch('cardNumber').length > 0){
            const value = watch('cardNumber').replace(/\s/g, "").match(/\d{1,4}/g).join(" ").substr(0, 19) || ''
            setValue('cardNumber', value)
        }
        if(watch('expiryDate').length > 0){
            let value = watch('expiryDate').replace(/\s/g, "").match(/\d{1,2}/g).join("/").substr(0, 5) || ''

            if(value.split('/')[0] > 12)
                value = value.replace(value.split('/')[0], '12')
            
            setValue('expiryDate', value)
        }
        if(watch('cvc').length > 0){
            const value = watch('cvc').substr(0, 3) || ''

            setValue('cvc', value)
        }
        // eslint-disable-next-line
    }, [watch('cardNumber'), watch('expiryDate'), watch('cvc')])

    const getCardInfo = (placeholder, match) =>{
        let cardnumber = placeholder.split('')

        match.split('').forEach((item, ind) =>{
            cardnumber[ind] = item
        })

        return cardnumber.join('')
    }

    const submitForm = (data) =>{
        const {fetchCardRequest} = props,
              {token} = props.authReducer.authStatus

        if(errors)
            return

        fetchCardRequest({...data, token: token})
    }

    return(<>
        <TopBar props={{...props}}/>
        <section className="profile">

            <div className="profile__inner">

                <h4 className="profile__title">Профиль</h4>
                <h6 className="profile__subtitle">Введите платежные данные</h6>

                <form action="" className="profile__form" onSubmit={handleSubmit(submitForm)}>

                    <div className="profile__info">

                        <div className="profile__data">
                            <Controller
                                name="cardName"
                                control={control}
                                defaultValue={card.cardName}
                                rules={{ required: true }}
                                render={({ field }) => <TextField className="profile__input" label="Имя владельца" placeholder="Введите имя" {...field}/>}
                            />
                            {errors.cardName && <div className="form__errors">Это поле обязательно</div>}

                            <Controller
                                name="cardNumber"
                                control={control}
                                defaultValue={card.cardNumber}
                                rules={{ required: true }}
                                render={({ field }) => <TextField className="profile__input" label="Номер карты" placeholder="0000 0000 0000 0000"  {...field}/>}
                            />
                            {errors.cardNumber && <div className="form__errors">Это поле обязательно</div>}
                            <div className="profile__number">

                            <div className="profile__errors">
                                <Controller
                                    name="expiryDate"
                                    control={control}
                                    defaultValue={card.expiryDate}
                                    rules={{ required: true }}
                                    render={({ field }) => <TextField className="profile__input"  label="MM/YY" placeholder="01/01" {...field}/>}
                                />
                                {errors.expiryDate && <div className="form__errors">Это поле обязательно</div>}
                            </div>
                            <div className="profile__errors">
                                <Controller
                                    name="cvc"
                                    control={control}
                                    defaultValue={card.cvc}
                                    rules={{ required: true }}
                                    render={({ field }) => <TextField className="profile__input"  label="CVC" placeholder="000"   {...field} />}
                                />
                                {errors.cvc && <div className="form__errors">Это поле обязательно</div>}
                            </div>
                            </div>
                        </div>

                        <div className="card">

                            <div className="card__inner">

                                <div className="card__top">
                                    <img src={logo} alt="" className="card__logo"/>
                                    <span className="card__date">{getCardInfo('01/01', watch('expiryDate'))}</span>
                                </div>

                                <div className="card__center">
                                    <span className="card__number">{getCardInfo('0000 0000 0000 0000', watch('cardNumber'))}</span>
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

const mapDispatchToprops = {fetchCardRequest}

export default connect(mapStateToprops, mapDispatchToprops)(Profile)