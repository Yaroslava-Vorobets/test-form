import React from 'react'
import {useCallback, useRef} from 'react'
import { GoogleMap} from '@react-google-maps/api';


const containerStyle = {
  width: '100vw',
  height: '100vh'
};

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
      >
       
        <></>
      </GoogleMap>
  ) 
}

export default Map; 