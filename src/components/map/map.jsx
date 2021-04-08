import React from 'react'
import TopBar  from "../topbar/topbar"
import './map.scss'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import { getCardRequest } from '../../modules/card/actions';
import { fetchRoutesRequest } from '../../modules/routes/actions';
import TaxiForm from '../taxiform/taxiform'

mapboxgl.accessToken = 'pk.eyJ1IjoiMXRvMyIsImEiOiJja21reXVodHoxMWV1Mm5ta29mODduYnFjIn0.OPsdMhl2rM9KYhpRLG9Vlg'


const Map = (props) =>{
    const mapContainerRef = React.useRef(null),
          { card } = props.cardReducer,
          { addresses } = props.routesReducer.routes,
          [state, setState] = React.useState(false)

    React.useEffect(() => {

        if(card.cardNumber.length < 1){
            const {token} = props.authReducer.authStatus,
                  {getCardRequest} = props
            getCardRequest({token: token})
        }

        if(!addresses){
            const {fetchRoutesRequest} = props
            fetchRoutesRequest()
        }

        // eslint-disable-next-line
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.9876, 39.7405],
            zoom: 12.5,
        })

        // return () => map.remove()
        // eslint-disable-next-line
    }, [])

    React.useEffect(() =>{
        if(card.cardNumber.length > 1)
            setState(true)
        else setState(false)
    }, [card])


    return (<>
        <TopBar props={{...props}}/>
        <section className="map" ref={mapContainerRef}>
            {state && <TaxiForm/>}
        </section>
    </>
    )
}

const mapStateToprops = state => state

const mapDispatchToprops = { getCardRequest, fetchRoutesRequest}

export default connect(mapStateToprops, mapDispatchToprops)(Map)