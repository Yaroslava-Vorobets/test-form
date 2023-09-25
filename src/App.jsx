import Map from './components/Map'
import { useJsApiLoader } from '@react-google-maps/api';
import Autocomplete from './components/Autocomplete'
const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

const center = {
  lat: 42.638,
  lng: 12.674
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
         <Autocomplete isLoaded={isLoaded} />
        {isLoaded ? <Map center={center} /> : <h2>...Loading map</h2>}
       
        </div>
     )
    
}

export default App; 

