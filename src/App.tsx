import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './state/store';
import Routes from "./routes/Routes";


function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
