import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';
// import { version } from '../../package.json';
import rootReducer from './root-reducer';

const persistConfig = {
  key: `root`,
  storage: localforage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
