import React from 'react';
import ReactDOM from 'react-dom';
import Map from './component/Map.jsx';
import SMSForm from './component/SMSForm.jsx';
import DateTime from './component/DateTime.jsx';
import EventForm from './component/EventForm.jsx';

class App extends React.Component {

  render() {
    return(
      <>
        <h1>Hello</h1>
        <Map/>
        <SMSForm/>
        <DateTime/>
        <EventForm/>
      </>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));