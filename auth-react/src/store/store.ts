import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth-slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persitedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;