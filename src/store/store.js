import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootRecuders from '../reducers';

const store = createStore(rootRecuders, composeWithDevTools());

export default store;
