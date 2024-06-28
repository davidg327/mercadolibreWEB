import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import Header from "./components/Header";

function App() {
  return (
      <div>
          <Header />
          <BrowserRouter>
              <Routes />
          </BrowserRouter>
      </div>
  );
}

export default App;
