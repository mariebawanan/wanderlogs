import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { firebaseDBLogs, firebaseLooper, firebase } from '~firebase/initFirebase';
import { LogForm } from '~components';

import { selectActiveLog } from '~redux/selectors';
import { useAppSelector, useAppDispatch } from '~hooks/redux';
import { setActiveLog, setLogs, setIsFetchingLogs } from '~redux/actions/logs';

import { getLogBySlug } from '~helpers/utils';
import { Logs } from '~types/Log';

const Edit = () => {
    const dispatch = useAppDispatch();

    const history = useHistory();
    const { slug } = useParams<{ slug: string }>();
    const activeLog = useAppSelector((state) => selectActiveLog(state));

    useEffect(() => {
        const getData = () =>
            firebaseDBLogs
                .orderByChild('date')
                .once('value')
                .then((snapshot: firebase.database.DataSnapshot) =>
                    getDataCallback(snapshot)
                )
                .catch((e) => console.error(e));

        getData();
        firebaseDBLogs.on('child_added', () => getData());
        firebaseDBLogs.on('child_removed', () => getData());
        firebaseDBLogs.on('child_changed', () => getData());
        return () => firebaseDBLogs.off();
    }, []);

    const getDataCallback = (snapshot: firebase.database.DataSnapshot) => {
        let logs: Logs = firebaseLooper(snapshot);
        dispatch(setLogs(logs));

        const logFromSlug = getLogBySlug(slug, logs);
        if (logFromSlug === undefined) history.push('/feed');
        else {
            dispatch(setActiveLog(logFromSlug));
            dispatch(setIsFetchingLogs(false));
        }
    };

    const initialState = activeLog && {
        title: activeLog.title,
        subtitle: activeLog.subtitle,
        photo: activeLog.photo,
        body: activeLog.body,
        slug: activeLog.slug,
        date: activeLog.date,
        id: activeLog.id,
    };

    return activeLog && <LogForm editMode initialState={initialState} />;
};

export default Edit;
