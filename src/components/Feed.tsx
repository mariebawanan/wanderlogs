import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    firebaseDBLogs,
    firebaseLooper,
} from '~firebase/initFirebase';
import moment from 'moment';
import {
    setActiveLog,
    setLogs,
    setFetchingLogs,
} from '~redux/actions/logs';
import {
    FeedContainer,
    FeedItem,
    FeedItemTitle,
    FeedItemDetails,
} from '~styles/components';
import { LoaderIcon } from '~assets/icons';
import { Loader } from '~components';

const Feed = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logs = useSelector((state) => state.logs.get('logs'));
    const isFetching = useSelector((state) =>
        state.logs.get('isFetchingLogs')
    );

    const [imageLoaded, setImageLoaded] = useState(false);

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
                dispatch(setLogs(logs));
                dispatch(setFetchingLogs(false));
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const handleClick = (log) => {
        dispatch(setActiveLog(log));
        history.push(`/feed/${log.get('slug')}`);
    };

    return isFetching ? (
        <Loader text="Loading your feed..." />
    ) : !logs.length ? (
        <h1>No posts yet</h1>
    ) : (
        <FeedContainer>
            {logs
                .map((log) => (
                    <FeedItem
                        key={log.get('id')}
                        onClick={() => handleClick(log)}
                    >
                        <div
                            style={{
                                maxWidth: '100%',
                                height: '240px',
                                border: 'none',
                                display: imageLoaded
                                    ? 'none'
                                    : 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                style={{ width: '10%' }}
                                src={LoaderIcon}
                            />
                        </div>

                        <img
                            style={{
                                maxWidth: '100%',
                                height: '240px',
                                transition: '0.5s ease-in-out',
                                opacity: imageLoaded ? 1 : 0,
                            }}
                            src={log.get('images')[0]}
                            onLoad={() => setImageLoaded(true)}
                        />

                        <FeedItemDetails>
                            <FeedItemTitle>
                                {log.get('title')}
                            </FeedItemTitle>
                            <span>
                                {moment(log.get('date')).format(
                                    'MMM DD, YYYY '
                                )}
                            </span>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: `${log
                                        .get('body')
                                        .slice(0, 80)}...`,
                                }}
                            />
                        </FeedItemDetails>
                    </FeedItem>
                ))
                .reverse()}
        </FeedContainer>
    );
};

export default Feed;
