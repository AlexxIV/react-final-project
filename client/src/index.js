import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';
import '../node_modules/bootstrap/scss/bootstrap-reboot.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
