import React from 'react'
import {useCallback, useRef} from 'react'
import { GoogleMap } from '@react-google-maps/api';
import {StyleSnazzy} from './styleSnazzy'


const containerStyle = {
  width: '100vw',
  height: '100vh'
};
const defaultOptions = {    
    panControl: true,
    zoomControl: true,   
    scaleControl: false,
    onClick: true,
    onMouseMove: true,
    streetView: true,
    klickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel:true,
    overviewMapControl: false,
    rotateControl: false,
    fullscreenControll: false,
    styles: StyleSnazzy
  
   
} 
//defaultOptions source - 'GoogleMap -> GoogleMapProps'; 'https://www.w3schools.com/graphics/google_maps_controls.asp'

const Map = ({center}) => {    
    const mapRef = useRef(undefined)
    
//   const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
   mapRef.current= map   
  }, [])

  const onUnmount = useCallback(function callback(map) {
    mapRef.current= undefined 
  }, [])
    
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options = {defaultOptions}
      >
       
        <></>
      </GoogleMap>
  ) 
}

export default Map; 