import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Create from './pages/Create.jsx';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Router>

      </>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));