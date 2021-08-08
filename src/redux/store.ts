import { configureStore } from '@reduxjs/toolkit';
import logs from './reducers/logs';

const store = configureStore({
    reducer: {
        logs: logs,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
