import { Select, MenuItem } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import './taxiform.scss'


const TaxiForm = (props) =>{

    const { addresses } = props.routesReducer.routes

    const [state, setState] = React.useState({
        input1: '',
        input2: ''
    })

    const [value, setValue] = React.useState({
        value1: addresses,
        value2: addresses
    })

    const changeHandler = (e, target) =>{
        e.preventDefault()

        const items = e.target.value
        
        if(items === state.input1 || items === state.input2)
            return
        
        const obj = {}

        obj[target] = items

        setState({...state, ...obj})
        
        
        if(target === 'input1'){
            const newVal = addresses.filter(item => item !== addresses[items - 1])
            setValue({...value, value2: newVal})
        }
        else {
            const newVal = addresses.filter(item => item !== addresses[items - 1])
            setValue({...value, value1: newVal})
        }
        
    }

    return (
        <form className="taxi-form">

            <div className="taxi-form__field">
                <Select value={state.input1} className="taxi-form__input" onChange={(e) => changeHandler(e, 'input1')}>
                    {value.value1.map((item, index) => <MenuItem  key={index} value={index + 1}>{item}</MenuItem>)}
                </Select>
            </div>

            <div className="taxi-form__field">
                <Select value={state.input2} className="taxi-form__input" onChange={(e) => changeHandler(e, 'input2')}>
                    {value.value2.map((item, index) => <MenuItem  key={index} value={index + 1}>{item}</MenuItem>)}
                </Select>
            </div>

        </form>
    )
}

const mapStateToprops = state => state

const mapDispatchToprops = {}

export default connect(mapStateToprops, mapDispatchToprops)(TaxiForm)