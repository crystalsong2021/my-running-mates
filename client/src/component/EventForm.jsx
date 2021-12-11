import React, { Component, useEffect, useRef, useState } from 'react';
import { BrowserRouter, Router, Routes, Route ,useNavigate, useLocation, Navigate} from 'react-router-dom';

// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from '@material-ui/pickers';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import {  Typography, Button, Grid, TextField , AppBar, Toolbar} from '@material-ui/core';

import AddIcon from '@mui/icons-material/Add';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddAutocomplete from './AddAutocomplete.jsx'


class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        name: '',
        address: '',
        date:'',
        time:'',
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    const navigate = useNavigate();
    const location = useLocation();

    event.preventDefault();
    this.setState({ submitting: true });
    console.log('Before sent->', this.state.event)

    navigate('/')
    // <Navigate to='main'/>
    // <>

    //       <Routes>
    //         <Route path="/" element={<Main />} />
    //         <Route path="/Create" element={<Create />} />
    //         <Route path="/main" element={<Main />} />
    //       </Routes>

    // </>

    fetch('/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.event)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            event: {
              name: '',
              address: '',
              date:'',
              yes:0,
              maybe:0
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      event: { ...this.state.event, [name]: event.target.value }
    });
  }

  render() {


    return (
      <>
      <AppBar position='relative'>
          <Toolbar>
          <Typography variant='h6' align='center'>Create Event</Typography>
          </Toolbar>
      </AppBar>
      {/* {this.state.submitting? <Redirect to ='/' /> : <Main/>} */}
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <TextField
         type='text'
          variant='outlined'
          label='Name'
          size='medium'
          name="name"
          color='primary'
          id="name"
          value={this.state.event.name}
          onChange={this.onHandleChange}
        />
        <br/>
        <TextField
         type='date'
          variant='outlined'
          size='medium'
          name="date"
          color='primary'
          id="date"
          value={this.state.event.date}
          onChange={this.onHandleChange}
        />
        <br/>
        <TextField
         type='time'
          variant='outlined'
          size='medium'
          name="time"
          color='primary'
          id="time"
          value={this.state.event.time}
          onChange={this.onHandleChange}
        />

        {/* <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.event.name}
            onChange={this.onHandleChange}
          />
        </div> */}
        {/* <div>
          <label htmlFor="address">address:</label>
          <textarea
            name="address"
            id="address"
            value={this.state.event.address}
            onChange={this.onHandleChange}
          />
        </div> */}
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          label="Event Date"
          value={this.state.event.date}
          onChange={this.onHandleChange}
        />

      </MuiPickersUtilsProvider> */}
        <div>
          <AddAutocomplete/>
        </div>
        <Button
          endIcon={ <AddIcon /> }
          size='small'
          variant='contained'
          color='primary'
          type='submit'

        >
          Create
        </Button>
        {/* <button type="submit" disabled={this.state.submitting}>
          Create
        </button> */}
      </form>
      </>
    );
  }
}

export default EventForm;
