import { List, Map } from 'immutable';

const initialState = Map({
    logs: List(),
    activeLog: Map(),
    isFetchingLogs: true,
});

export default function logs(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOGS':
            return state.set('logs', action.logs);
        case 'SET_ACTIVE_LOG':
            return state.set('activeLog', action.log);
        case 'SET_IS_FETCHING_LOGS':
            return state.set('isFetchingLogs', action.isFetchingLogs);
        default:
            return state;
    }
}
