import { Log, Logs } from '~types/Log';

export const setLogs = (logs: Logs) => ({
    type: 'SET_LOGS',
    logs,
});

export const setActiveLog = (log: Log) => ({
    type: 'SET_ACTIVE_LOG',
    log,
});

export const setIsFetchingLogs = (isFetchingLogs: boolean) => ({
    type: 'SET_IS_FETCHING_LOGS',
    isFetchingLogs,
});

export const clearActiveLog = () => ({
    type: 'CLEAR_ACTIVE_LOG',
});

export const setIsFetchingActiveLog = (isFetchingActiveLog: boolean) => ({
    type: 'SET_IS_FETCHING_ACTIVE_LOG',
    isFetchingActiveLog,
});
