import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Config from './config';
import { BrowserRouter } from 'react-router-dom';
// import ConnectionStatus from './components/ConnectionStatus';
// import Publisher from './components/Publisher';
// import Subscriber from './components/Subscriber';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <App
        apiKey={ Config.API_KEY }
        sessionId={ Config.SESSION_ID }
        token={ Config.TOKEN } />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

