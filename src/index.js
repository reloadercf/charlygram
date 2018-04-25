//
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

const WithRouter=()=>(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
