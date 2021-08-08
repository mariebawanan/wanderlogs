import { AnyAction } from 'redux';

const initialState = {
    logs: [],
    activeLog: null,
    isFetchingLogs: true,
    isFetchingActiveLog: true,
};

export default function logs(state = initialState, action: AnyAction) {
    switch (action.type) {
        case 'SET_LOGS':
            return { ...state, logs: action.logs };
        case 'SET_ACTIVE_LOG':
            return { ...state, activeLog: action.log };
        case 'SET_IS_FETCHING_LOGS':
            return { ...state, isFetchingLogs: action.isFetchingLogs };
        case 'SET_IS_FETCHING_ACTIVE_LOG':
            return { ...state, isFetchingActiveLog: action.isFetchingActiveLog };
        case 'CLEAR_ACTIVE_LOG':
            return { ...state, activeLog: null };
        default:
            return state;
    }
}
