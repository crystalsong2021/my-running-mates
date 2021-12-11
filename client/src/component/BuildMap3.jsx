import React, { Component, useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, Map ,useMapEvents} from 'react-leaflet'
// import Search from './Search.jsx';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: null,
//   iconUrl: null,
//   shadowUrl: null
// });

const location = [38.9072, -77.0369];
const zoom = 4;

// function LocationMarker() {
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       console.log('Lat===>', e.latlng)
//       // setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   )
// }

function BuildMap(){
  return (
    <div className='leafletContainer'>
        < MapContainer

          style={{ height: '100%', width: '100%' }}
          center={location}
          zoom={13}
          scrollWheelZoom={false}
        >

          <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
          />

          <Marker position={location} eventHandlers={{
            click: () => {
              console.log('marker clicked')
            }
          }}>
            <Popup >
              <div>
                <h1>hello</h1>
              </div>
            </Popup>
          </Marker>
          {/* <LocationMarker/> */}


        </MapContainer>
      </div>


  )

}



export default BuildMap