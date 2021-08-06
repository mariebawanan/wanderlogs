import { combineReducers } from 'redux';
import logs from './logs';

export const rootReducer = combineReducers({
    logs,
});

export type RootState = ReturnType<typeof rootReducer>;
