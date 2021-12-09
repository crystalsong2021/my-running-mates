import React from 'react';
import ReactDOM from 'react-dom';
import Map from './component/Map.jsx';
import SMSForm from './component/SMSForm.jsx';


class App extends React.Component {

  render() {
    return(
      <>
        <h1>Hello</h1>
        <Map/>
        <SMSForm/>
      </>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));