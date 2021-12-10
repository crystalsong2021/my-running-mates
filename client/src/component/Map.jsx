import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function Map() {
  const iconMarkup = renderToStaticMarkup(<i className=" fas fa-running fa-3x" />);
  const customMarkerIcon = divIcon({
      html: iconMarkup,
    });
  const planes = [

		["Cathédrale Notre-Dame de Paris 6 Parvis Notre-Dame – Pl. Jean-Paul II 75004 Paris, France",48.853693067485557,2.352743664946491],
		["Louvre Museum, Rue de Rivoli, 75001 Paris, France",48.861655440849454,2.3378949568965135],
		["Arc de Triomphe,Pl. Charles de Gaulle, 75008 Paris, France",48.87458453980969, 2.295580428466861],
		["Eiffel Tower,Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",48.8592273332406, 2.2948079502736616],
		["Musée Marmottan Monet,2 Rue Louis Boilly, 75016 Paris, France",48.860639038209676, 2.2671704694513704],

		];
    const shoot = () => {
      console.log('click')
    }
    // var map = L.map('map').setView([-41.3058, 174.82082], 8);
  return(
    <div>


      <div className='leafletContainer'>
        <MapContainer
          style={{ height: '100%', width: '100%' }}
          //46.78660029361327, -121.73282332277184
          center={[48.86092312142704, 2.3255343967625355]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
          />
        {console.log('planes->', planes)}
        {planes.length > 0 &&
                planes.map((marker) => (

                  <Marker
                    position={[
                      marker[1],
                      marker[2]
                    ]}
                    icon={customMarkerIcon}
                  >
                    <Popup >{marker[0]}</Popup>
                  </Marker>
                ))}
        }

          {/* <Marker
            position={[46.78660029361327, -121.73282332277184]}
          >
           <Popup>{'Santa run1, 46.78660029361327, -121.73282332277184'}</Popup>
          </Marker>

          <Marker
            position={[46.78660029361327, -121.73282332277184]}
          >
           <Popup>{'Santa run2, 47.78660029361327, -122.73282332277184'}</Popup>
          </Marker> */}

        </MapContainer>
      </div>
    </div>
  )
}

export default Map