import { Select, MenuItem, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import './taxiform.scss'
import { getRoutesRequest, deleteRoutesPoints } from '../../modules/routes/actions';
import { useForm } from 'react-hook-form';
import firstCar from '../../assets/img/first_car.png'
import secondCar from '../../assets/img/second_car.png'
import thirdCar from '../../assets/img/third_car.png'


const TaxiForm = (props) =>{

    const { addresses } = props.routesReducer.routes
    const { points } = props.routesReducer

    const { register, formState: { errors }, handleSubmit, watch, reset} = useForm()

    const [success, setSuccess] = React.useState(false)

    const [variant, setVariant] = React.useState({
        first: true,
        second: false,
        third: false
    })

    const [addr, setAddr] = React.useState([])

    React.useEffect(() =>{
        setAddr(addresses.map((item, index) => ({name: item, id: index})))
        // eslint-disable-next-line
    }, [])

    React.useEffect(() =>{
        if(points.length > 0)
            setSuccess(true)
        else setSuccess(false)
    }, [points])

    

    const submitHandler = () =>{

        const {getRoutesRequest} = props

        getRoutesRequest({address1: addr[watch('input1')].name, address2: addr[watch('input2')].name})
    }

    const changeVariant = (e) =>{
        const target = e.currentTarget

        setVariant({first: false, second: false, third: false, [target.getAttribute('name')]: true})

        e.preventDefault()
    }

    const changeToBuy = (e) =>{
        const {deleteRoutesPoints} = props
        
        deleteRoutesPoints()

        reset({})
        
        e.preventDefault()
    }

    if(success)
        return (
            <form className="taxi-form taxi-form__success" onSubmit={changeToBuy}>
                <div className="taxi-form__caption">Заказ размещен</div>
                <div className="taxi-form__description">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
                <Button data-testid="order_test" variant="contained" color="primary" type="submit" className="form__btn taxi-form__btn--success">Сделать новый заказ</Button>
            </form>
        )

    return (
        <form className="taxi-form" onSubmit={handleSubmit(submitHandler)}>

            <div className="taxi-form__field">
                <Select defaultValue="" {...register('input1', {required: true})} className="taxi-form__input">
                    {
                    addr.filter(item => item.id !== watch('input2'))
                         .map((item, index) => <MenuItem  key={index} value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
                {errors.input1 && <div className="form__errors">Это поле обязательно</div>}
            </div>

            <div className="taxi-form__field">
                <Select defaultValue="" {...register('input2', {required: true})} className="taxi-form__input">
                    {
                    addr.filter(item => item.id !== watch('input1'))
                         .map((item, index) => <MenuItem  key={index} value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
                {errors.input2 && <div className="form__errors">Это поле обязательно</div>}
            </div>

            <div className="taxi-form__order">
                    <ul className="taxi-form__variant">
                        <li name='first' className={variant.first ? "taxi-form__item active": "taxi-form__item"} onClick={(e) => changeVariant(e)}>
                            <div className="taxi-form__title">Стандарт</div>
                            <div className="taxi-form__subtitle">Стоимость</div>
                            <div className="taxi-form__cost">150 ₽</div>
                            <img alt="" className="taxi-form__img" src={firstCar}/>
                        </li>
                        <li name='second' className={variant.second ? "taxi-form__item active": "taxi-form__item"} onClick={(e) => changeVariant(e)}>
                            <div className="taxi-form__title">Премиум</div>
                            <div className="taxi-form__subtitle">Стоимость</div>
                            <div className="taxi-form__cost">250 ₽</div>
                            <img alt="" className="taxi-form__img" src={secondCar}/>
                        </li>
                        <li name='third' className={variant.third ? "taxi-form__item active": "taxi-form__item"} onClick={(e) => changeVariant(e)}>
                            <div className="taxi-form__title">Бизнес</div>
                            <div className="taxi-form__subtitle">Стоимость</div>
                            <div className="taxi-form__cost">300 ₽</div>
                            <img alt="" className="taxi-form__img" src={thirdCar}/>
                        </li>
                    </ul>
                <Button data-testid="order_test" variant="contained" color="primary" type="submit" className="form__btn taxi-form__btn">Заказать</Button>
            </div>

        </form>
    )
}

const mapStateToprops = state => state

const mapDispatchToprops = {getRoutesRequest, deleteRoutesPoints}

export default connect(mapStateToprops, mapDispatchToprops)(TaxiForm)