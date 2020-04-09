import React from 'react';
import {Router} from 'react-router-dom'
import { Provider } from 'react-redux'

import './global.css'
import Routes from './routes'
import Header from './components/Header'
import store from './store'
import history from './services/history'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header/>
        <Routes />
      </Router>
    </Provider>
    
     
  );
}

export default App;
