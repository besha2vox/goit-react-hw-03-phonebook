import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './reducer';

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export { store };
