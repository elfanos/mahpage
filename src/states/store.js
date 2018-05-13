/**
 * Created by Rasmus on 2018-05-11.
 */
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer( persistConfig, reducers );

const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

const persistor = persistStore(store);
export default { store, persistor};