import React, {useEffect, useRef, useState} from 'react'
import { Search, GpsFixed } from "@material-ui/icons"
import {  Typography, Button, Grid, TextField , AppBar, Toolbar} from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import { InputBase } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const apiKey = 'AIzaSyCv_aRB5oKDWYhyl94PLs1MyAND-FoIG08';
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';


// load google map api js

function loadAsyncScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src
    })
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  })
}

const extractAddress = (place) => {
  console.log('line25--place-->', place)
  const lat = place.geometry.location.lat();
  const lng = place.geometry.location.lng();
  console.log('line28-->', lat, lng)
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    }
  }

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach(component => {
    console.log('line45-->', component)

    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_2")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }

  });
  console.log('line65--address-->', address)
  return address;
}


function AddAutocomplete() {

  const searchInput = useRef(null);
  const [address, setAddress] = useState({});


  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if(window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  }

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

  }


  const reverseGeocode = ({ latitude: lat, longitude: lng}) => {
    console.log('Reverse->', latitude,longitude )
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = "Getting your location...";
    fetch(url)
        .then(response => response.json())
        .then(location => {
          const place = location.results[0];
          console.log('place-->', place)
          const _address = extractAddress(place);
          setAddress(_address);
          searchInput.current.value = _address.plain();
        })
  }


  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        reverseGeocode(position.coords)
      })
    }
  }





  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, []);



  return (
    <div className="App">
      <div>


        <div className="search">
        {/* <TextField
            id='to'
            name='to'
            placeholder='Meetup location'

            // value={this.state.message.to}
            // onChange={this.onHandleChange}
            margin="dense"
            rows='20'
            fullWidth
            variant="outlined"
            ref={searchInput}
        /> */}
        <input onChange={(e)=>{console.log(e.target.value)}}ref={searchInput} type="text" placeholder="Meetup location...."/>

          {/* <span><Search /></span> */}
          {/* <AddLocationIcon  onClick={findMyLocation}/>
          <button onClick={findMyLocation}></button> */}
        </div>

        {/* <div className="address">
          <p>City: <span>{address.city}</span></p>
          <p>State: <span>{address.state}</span></p>
          <p>Zip: <span>{address.zip}</span></p>
          <p>Country: <span>{address.country}</span></p>
        </div> */}

      </div>
    </div>
  )
}

export default AddAutocomplete