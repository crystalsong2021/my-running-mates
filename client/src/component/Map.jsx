import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
function Map() {
  return(
    <div>
      <p className='listingLocationTitle'>Find Runner</p>

      <div className='leafletContainer'>
        <MapContainer
          style={{ height: '100%', width: '100%' }}
          //47.01555189037493, -122.91997562524425
          center={[47.01555189037493, -122.91997562524425]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
          />

          <Marker
            position={[47.01555189037493, -122.91997562524425]}
          >
           <Popup>{'Santa run'}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Map