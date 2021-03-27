import React from 'react'
import './map.scss'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiMXRvMyIsImEiOiJja21reXVodHoxMWV1Mm5ta29mODduYnFjIn0.OPsdMhl2rM9KYhpRLG9Vlg'


export const Map = () =>{
    const mapContainerRef = React.useRef(null)

    React.useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-104.9876, 39.7405],
            zoom: 12.5,
        })

        return () => map.remove()
    }, [])


    return (
    <section className="map" ref={mapContainerRef}>
           
    </section>
    )
}