import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import {
    firebaseDBLogs,
    firebaseLooper,
    firebaseDB,
} from '~firebase/initFirebase';
import { setActiveLog, setLogs } from '~redux/actions/logs';
import { PostContainer } from '~styles/components';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Post = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { slug } = useParams();
    const activeLog = useSelector((state) =>
        state.logs.get('activeLog')
    );

    useEffect(() => {
        getData();
        firebaseDBLogs.on('child_added', () => getData());
        firebaseDBLogs.on('child_removed', () => getData());
        firebaseDBLogs.on('child_changed', () => getData());
        return () => firebaseDBLogs.off();
    }, []);

    const getData = () => {
        firebaseDBLogs
            .orderByChild('date')
            .once('value')
            .then((snapshot) => {
                let logs: object[] = [];
                logs = firebaseLooper(snapshot);
                const activeLog = logs.find(
                    (log) => log.get('slug') === slug
                );
                if (activeLog === undefined) history.push('/feed');
                else {
                    dispatch(setLogs(logs));
                    dispatch(setActiveLog(activeLog));
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <PostContainer>
            <h1>{activeLog.get('title')}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: activeLog.get('body'),
                }}
            />
            <p>{activeLog.get('tags')}</p>
            <div>
                {activeLog.get('images') &&
                    activeLog
                        .get('images')
                        .map((url: string, i: number) => (
                            <img
                                key={i}
                                style={{ width: '500px' }}
                                src={
                                    url ||
                                    'http://via.placeholder.com/300'
                                }
                                alt="firebase-image"
                            />
                        ))}
            </div>
        </PostContainer>
    );
};

export default Post;
