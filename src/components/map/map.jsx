import React from 'react'
import TopBar  from "../topbar/topbar"
import './map.scss'
import mapboxgl from 'mapbox-gl'
import { connect } from 'react-redux'
import { getCardRequest } from '../../modules/card/actions';
import { fetchRoutesRequest } from '../../modules/routes/actions';
import TaxiForm from '../taxiform/taxiform'

mapboxgl.accessToken = 'pk.eyJ1IjoiMXRvMyIsImEiOiJja21reXVodHoxMWV1Mm5ta29mODduYnFjIn0.OPsdMhl2rM9KYhpRLG9Vlg'

let map

const Map = (props) =>{
    const mapContainerRef = React.useRef(null),
          { card } = props.cardReducer,
          { addresses } = props.routesReducer.routes,
          { points } = props.routesReducer,
          [state, setState] = React.useState(false),
          [load, setLoad] = React.useState(true),
          [line, setLine] = React.useState(null)

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
        map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.316273,59.940578],
            zoom: 12.5,
        })

        map.on('load', () =>{
            setLoad(false)
        })

        // return () => map.remove()
        // eslint-disable-next-line
    }, [])

    React.useEffect(() =>{
        if(card.cardNumber.length > 1)
            setState(true)
        else setState(false)
    }, [card])

    React.useEffect(() =>{
        if(!load)
            setLine(drawRoute(points))
        // eslint-disable-next-line
    }, [points])

    const drawRoute = (coordinates) => {

        if(map.getLayer(line))
                map.removeLayer(line)

        const id = Math.random().toString(36).substring(7)

        map.flyTo({
          center: coordinates[0],
          zoom: 15
        })

        map.addLayer({
          id,
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates
              }
            }
          },
          layout: {
            "line-join": "round",
            "line-cap": "round"
          },
          paint: {
            "line-color": "#ffc617",
            "line-width": 8
          }
        })

        return id
    }


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