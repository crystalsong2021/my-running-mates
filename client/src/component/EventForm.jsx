import React, { Component } from 'react';
import {  Button, Grid, TextField } from '@material-ui/core';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        name: '',
        address: '',
        date:'',
        yes:0,
        maybe:0
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    console.log('Before sent->', this.state.event)
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
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.event.name}
            onChange={this.onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="address">address:</label>
          <textarea
            name="address"
            id="address"
            value={this.state.event.address}
            onChange={this.onHandleChange}
          />
        </div>

        <button type="submit" disabled={this.state.submitting}>
          Create
        </button>
      </form>
    );
  }
}

export default EventForm;
