import { RootState } from './store';

export const selectLogsState = (store: RootState) => store.logs;

export const selectLogs = (store: RootState) => selectLogsState(store).logs;

export const selectActiveLog = (store: RootState) => selectLogsState(store).activeLog;

export const selectIsFethingLogs = (store: RootState) =>
    selectLogsState(store).isFetchingLogs;

export const selectIsFethingActiveLog = (store: RootState) =>
    selectLogsState(store).isFetchingActiveLog;
