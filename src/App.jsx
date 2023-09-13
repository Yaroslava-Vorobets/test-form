import Map from './components/Map'
import {useJsApiLoader } from '@react-google-maps/api';
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

const center = {
  lat: -3.745,
  lng: -38.523
};


const libraries=['places']

export const App = () => {
const { isLoaded } = useJsApiLoader({
id: 'google-map-script',
googleMapsApiKey: API_KEY,
libraries
  })
    return (
        <div>
           {isLoaded ?  <Map center={center} />: <h2>...Loading</h2> }
        </div>
     )
    
}

export default App; 

