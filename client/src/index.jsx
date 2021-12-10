import React from 'react';
console.log(React.version);
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
      </Routes>
    </BrowserRouter>
      {/* <BrowserRouter>

        <Routes>

          <Route path ='/' element={ <Main/>} />
          <Route path ='/create' element={ <Create/>}/>

        </Routes>

        </BrowserRouter> */}

    </>
    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));