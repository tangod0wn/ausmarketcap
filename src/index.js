import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { routerReducer, routerMiddleware, push } from 'react-router-redux'


import App from './components/app';
import CoinDetails from './components/CoinDetails'
import reducers from './reducers';

//added middleware to our application - can intercept and modify/block actions that are going to reducers.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Create a history of your choosing (we're using a browser history in this case)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/details" component={CoinDetails} />
                    <Route path="/" component={App} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
)


