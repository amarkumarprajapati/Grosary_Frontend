import { configureStore } from '@reduxjs/toolkit';
import someReducer from './someSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';


const persistConfig = {
  key: 'root',
  storage,
};


const rootReducer = combineReducers({
  someFeature: someReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

// Create the persistor
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };
