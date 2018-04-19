// import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfigureStore from './redux/ConfigureStore';
import App from './components/App';

ReactDOM.render(
    <Provider store={ConfigureStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();
