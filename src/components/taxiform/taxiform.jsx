import { Select, MenuItem, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import './taxiform.scss'
import { getRoutesRequest } from '../../modules/routes/actions';


const TaxiForm = (props) =>{

    const { addresses } = props.routesReducer.routes

    const [state, setState] = React.useState({
        input1: '',
        input2: ''
    })

    const [addr, setAddr] = React.useState([])

    const changeHandler = (e, target) =>{
        e.preventDefault()

        const items = e.target.value
        
        if(items === state.input1 || items === state.input2)
            return
        
        const obj = {}

        obj[target] = items

        setState({...state, ...obj})
    }

    React.useEffect(() =>{
        setAddr(addresses.map((item, index) => {
            return {name: item, id: index}
        }))
        // eslint-disable-next-line
    }, [])

    const submitHandler = (e) =>{

        const {getRoutesRequest} = props

        getRoutesRequest({address1: addr[state.input1].name, address2: addr[state.input2].name})

        e.preventDefault()
    }

    return (
        <form className="taxi-form" onSubmit={submitHandler}>

            <div className="taxi-form__field">
                <Select value={state.input1} className="taxi-form__input" onChange={(e) => changeHandler(e, 'input1')}>
                    {
                    addr.filter(item => item.id !== state.input2)
                         .map((item, index) => <MenuItem  key={index} value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
            </div>

            <div className="taxi-form__field">
                <Select value={state.input2} className="taxi-form__input" onChange={(e) => changeHandler(e, 'input2')}>
                    {
                    addr.filter(item => item.id !== state.input1)
                         .map((item, index) => <MenuItem  key={index} value={item.id}>{item.name}</MenuItem>)
                    }
                </Select>
            </div>

            <div className="taxi-form__order">


                <Button data-testid="order_test" variant="contained" color="primary" type="submit" className="form__btn">Заказать</Button>
            </div>

        </form>
    )
}

const mapStateToprops = state => state

const mapDispatchToprops = {getRoutesRequest}

export default connect(mapStateToprops, mapDispatchToprops)(TaxiForm)