import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import Create from './pages/Create.jsx';

class App extends React.Component {

  render() {
    return(
      <>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));