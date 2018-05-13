import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import registerServiceWorker from './registerServiceWorker';
import { ApplicationRouter } from './routes/index';

ReactDOM.render(
    <ApplicationRouter/>,
    document.getElementById('root')
);
registerServiceWorker();
