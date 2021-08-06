export const setLogs = (logs) => ({
    type: 'SET_LOGS',
    logs,
});

export const setActiveLog = (log) => ({
    type: 'SET_ACTIVE_LOG',
    log,
});

export const setFetchingLogs = (isFetchingLogs: boolean) => ({
    type: 'SET_IS_FETCHING_LOGS',
    isFetchingLogs,
});
