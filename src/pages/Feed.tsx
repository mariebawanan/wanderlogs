import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Loader, PageMessage } from '~components';
import { LandscapeIcon, LoaderIcon, TicketIcon } from '~assets/icons';
import { firebaseDBLogs, firebaseLooper } from '~firebase/initFirebase';
import { useAppSelector, useAppDispatch } from '~hooks/redux';
import { setActiveLog, setLogs, setIsFetchingLogs } from '~redux/actions/logs';
import { selectLogs, selectIsFethingLogs } from '~redux/selectors';
import {
    FeedContainer,
    FeedItem,
    FeedItemTitle,
    FeedItemDetails,
    FeedInnerContainer,
    FeedItemImageContainer,
    FeedItemImagePlaceholder,
    FeedItemImage,
    FeedSearchContainer,
} from '~styles/pages';
import { Log, Logs } from '~types/Log';
import useField from '~hooks/useField';
import { Input } from '~styles/components';

const Feed = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const logs = useAppSelector((state) => selectLogs(state));
    const isFetching = useAppSelector((state) => selectIsFethingLogs(state));

    const [imageLoaded, setImageLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const [localLogs, setLocalLogs] = useState(logs);

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
                let logs: Logs = [];
                logs = firebaseLooper(snapshot);
                dispatch(setLogs(logs));
                setLocalLogs(logs);
                dispatch(setIsFetchingLogs(false));
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const handleClick = (log: Log) => {
        dispatch(setActiveLog(log));
        history.push(`/feed/${log.slug}`);
    };

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.target as HTMLInputElement;
        setSearch(value.toLowerCase());

        if (!value.length) {
            setLocalLogs(logs);
        } else {
            const filteredLogs = localLogs.filter((log: Log) =>
                log.title.toLowerCase().includes(search)
            );
            setLocalLogs(filteredLogs);
        }
    };

    return (
        <FeedContainer>
            {!isFetching && logs.length && (
                <FeedSearchContainer>
                    <Input
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search for logs..."
                    ></Input>
                </FeedSearchContainer>
            )}
            {isFetching ? (
                <Loader text="Loading your feed..." />
            ) : !localLogs.length ? (
                <PageMessage
                    icon={TicketIcon}
                    buttonUrl="/write"
                    buttonText="Log a wander"
                    message="No logs found"
                />
            ) : (
                <FeedInnerContainer>
                    {localLogs
                        .map((log: Log) => (
                            <FeedItem key={log.id} onClick={() => handleClick(log)}>
                                <FeedItemImageContainer>
                                    {!log.photo ? (
                                        <FeedItemImagePlaceholder src={LandscapeIcon} />
                                    ) : (
                                        <Fragment>
                                            <FeedItemImagePlaceholder
                                                style={{
                                                    display: imageLoaded
                                                        ? 'none'
                                                        : 'block',
                                                }}
                                                src={LoaderIcon}
                                            />

                                            <FeedItemImage
                                                style={{
                                                    display: imageLoaded
                                                        ? 'block'
                                                        : 'none',
                                                }}
                                                src={log.photo}
                                                onLoad={() => setImageLoaded(true)}
                                            />
                                        </Fragment>
                                    )}
                                </FeedItemImageContainer>

                                <FeedItemDetails>
                                    <FeedItemTitle>{log.title}</FeedItemTitle>
                                    <span>
                                        {moment(log.date).format('MMM DD, YYYY ')}
                                    </span>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: `${log.body.slice(0, 80)}...`,
                                        }}
                                    />
                                </FeedItemDetails>
                            </FeedItem>
                        ))
                        .reverse()}
                </FeedInnerContainer>
            )}
        </FeedContainer>
    );
};

export default Feed;
