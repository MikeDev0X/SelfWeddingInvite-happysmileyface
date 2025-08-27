import mapStyle from './MapC.module.css';
import rosaZafiroImg from '/rosa_zafiro_icon.webp';
const apiKey = import.meta.env.VITE_API_KEY;
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapC = () =>{
    const defaultProps = {
        center: { lat: 18.62284, lng: -99.2015 },
        zoom: 17,
      };
    const openInMaps = () => {
        //const { lat, lng } = defaultProps.center;
        window.open(`https://maps.app.goo.gl/aVBHcn8kgKi9875v5`, '_blank');
    };


    return(
        <>
            <div className={mapStyle.mainContainer}>
                <span className={mapStyle.mainTitle}>Mapa</span>
                <span className={mapStyle.subtitle}>Te esperamos para celebrar 
                    el inicio de nuestra nueva historia juntos en Jardín Rosa Zafiro.
                </span>
                <img src={rosaZafiroImg} alt="Jardín Rosa Zafiro icon" style={{width:'6em', paddingTop:'0.5em'}} />
                <LoadScript  googleMapsApiKey={apiKey}>
                    <div onClick={() => openInMaps()} 
                         style={{ height: '6em', width: '10em', padding:'1em'}}>
                        <GoogleMap center={defaultProps.center} 
                                   zoom={defaultProps.zoom}
                                   options={{disableDefaultUI:true}}
                                   mapContainerStyle={{ width: '100%', height: '100%', borderRadius:'0.5em'}}
                             />
                    </div>
                </LoadScript>


            
            </div>
        </>
    )
}

export default MapC;