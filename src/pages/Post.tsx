import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import { firebaseDBLogs, firebaseLooper, firebase } from '~firebase/initFirebase';
import {
    setActiveLog,
    setLogs,
    setIsFetchingLogs,
    clearActiveLog,
} from '~redux/actions/logs';
import {
    PostContainer,
    PostTitle,
    PostDate,
    PostImageContainer,
    PostContent,
    PostLinkContainer,
    PostBody,
    PostLink,
    PostTextLink,
    PostSubtitle,
} from '~styles/pages';
import {
    ModalContent,
    ModalButtons,
    ModalButtonCancel,
    ModalButtonConfirm,
} from '~styles/components';
import { Loader, Modal } from '~components';
import { useAppSelector, useAppDispatch } from '~hooks/redux';
import { selectActiveLog } from '~redux/selectors';
import { Logs } from '~types/Log';
import { getLogBySlug } from '~helpers/utils';
import { searchPexelPhoto } from '~helpers/pexels';

const Post = () => {
    const dispatch = useAppDispatch();

    const history = useHistory();
    const { slug } = useParams<{ slug: string }>();
    const activeLog = useAppSelector((state) => selectActiveLog(state));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [photo, setPhoto] = useState('');

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

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            dispatch(clearActiveLog());
        };
    }, [slug]);

    const getDataCallback = (snapshot: firebase.database.DataSnapshot) => {
        let logs: Logs = firebaseLooper(snapshot);
        dispatch(setLogs(logs));

        const logFromSlug = getLogBySlug(slug, logs);
        if (logFromSlug === undefined) history.push('/feed');
        else {
            if (!logFromSlug.photo.length) {
                searchPexelPhoto(logFromSlug.title).then((photo) => setPhoto(photo));
            } else {
                setPhoto(logFromSlug.photo);
            }

            dispatch(setActiveLog(logFromSlug));
            dispatch(setIsFetchingLogs(false));
        }
    };

    const handleDelete = () => {
        firebaseDBLogs
            .child(activeLog.id)
            .remove()
            .then(() => history.push('/feed'))
            .catch((error) => {
                console.error(error);
                history.push('/');
            });
    };

    const handleModalToggle = () => setIsModalVisible(!isModalVisible);

    return activeLog ? (
        <PostContainer>
            <Modal visible={isModalVisible} toggle={handleModalToggle}>
                <ModalContent>
                    Are you sure you want to delete {activeLog.title}?
                </ModalContent>
                <ModalButtons>
                    <ModalButtonCancel onClick={handleModalToggle}>
                        Cancel
                    </ModalButtonCancel>
                    <ModalButtonConfirm onClick={handleDelete}>
                        Yes, delete
                    </ModalButtonConfirm>
                </ModalButtons>
            </Modal>

            <PostImageContainer style={{ backgroundImage: `url(${photo})` }} />

            <PostContent>
                <PostDate>{moment(activeLog.date).format('MMMM DD, YYYY ')}</PostDate>
                <PostTitle>{activeLog.title}</PostTitle>
                <PostSubtitle>{activeLog.subtitle}</PostSubtitle>
                <PostLinkContainer>
                    <PostLink to={`/edit/${activeLog.slug}`}>Edit Post</PostLink>
                    <PostTextLink onClick={handleModalToggle}>Delete Post</PostTextLink>
                </PostLinkContainer>

                <PostBody
                    dangerouslySetInnerHTML={{
                        __html: activeLog.body,
                    }}
                />
            </PostContent>
        </PostContainer>
    ) : (
        <Loader text="Loading post..." />
    );
};

export default Post;
