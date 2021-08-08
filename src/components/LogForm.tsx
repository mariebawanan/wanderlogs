import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { convertFromHTML, ContentState, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { firebase, firebaseDBLogs } from '~firebase/initFirebase';
import { clearActiveLog } from '~redux/actions/logs';
import { Log } from '~types/Log';

import useField from '~hooks/useField';
import useEditor from '~hooks/useEditor';

import { Uploader } from '~components';
import {
    InputGroup,
    EditorWrapper,
    Input,
    InputLabel,
    ButtonPrimary,
    LogFormInnerContainer,
    InputError,
    LogFormContainer,
} from '~styles/components';
import { formatSlug } from '~helpers/utils';

type LogFormType = {
    editMode: boolean;
    initialState: Log;
};

const getEditorStateFromBody = (editMode: boolean, body: string) => {
    if (!editMode) return EditorState.createEmpty();
    const blocksFromHTML = convertFromHTML(body);
    const content = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(content);
};

const LogForm = ({ editMode, initialState }: LogFormType) => {
    const history = useHistory();

    const [title, setTitle] = useField(initialState.title);
    const [subtitle, setSubTitle] = useField(initialState.subtitle);
    const [url, setUrl] = useState<string>(initialState.photo);
    const [body, EditorInput] = useEditor(
        initialState.body,
        getEditorStateFromBody(editMode, initialState.body)
    );
    const [errors, setErrors] = useState({ title: '', subtitle: '' });

    const isFormValid = !errors.title.length && title.length;

    const handleSubmit = () => {
        const slug = formatSlug(title);

        if (isFormValid) {
            if (editMode) {
                firebaseDBLogs
                    .child(initialState.id)
                    .update({
                        title,
                        subtitle,
                        body,
                        editedDate: firebase.database.ServerValue.TIMESTAMP,
                        slug: slug,
                        photo: url,
                    })
                    .then(() => {
                        clearActiveLog();
                        history.push(`/feed/${slug}`);
                    })
                    .catch((error) => console.error(error));
            } else {
                firebaseDBLogs
                    .push({
                        title,
                        subtitle,
                        body,
                        date: firebase.database.ServerValue.TIMESTAMP,
                        slug,
                        photo: url,
                    })
                    .then(() => history.push(`/feed/${slug}`))
                    .catch((error) => console.error(error));
            }
        } else {
            if (!title.length) {
                setErrors({
                    ...errors,
                    title: 'Title is required.',
                });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        }
    };

    const validateRequiredField = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (!value.length) {
            setErrors({
                ...errors,
                [name]: `${name.charAt(0).toUpperCase()}${name
                    .slice(1)
                    .toLowerCase()} is required.`,
            });
        } else {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [editMode]);

    return (
        <LogFormContainer data-testid="logform-container">
            <LogFormInnerContainer>
                <InputGroup>
                    <InputLabel>Title</InputLabel>
                    <Input
                        name="title"
                        value={title}
                        onChange={setTitle}
                        onBlur={validateRequiredField}
                    />
                    <InputError data-testid="logform-title-error">
                        {errors.title}
                    </InputError>
                </InputGroup>

                <InputGroup>
                    <InputLabel>Subtitle</InputLabel>
                    <Input name="subtitle" value={subtitle} onChange={setSubTitle} />
                </InputGroup>

                <InputGroup>
                    <InputLabel>Body</InputLabel>
                    <EditorWrapper>
                        <EditorInput />
                    </EditorWrapper>
                </InputGroup>

                <Uploader url={url} setUrl={setUrl} />
                <ButtonPrimary onClick={handleSubmit} data-testid="logform-submit">
                    {editMode ? 'Edit Log' : 'Log it!'}
                </ButtonPrimary>
            </LogFormInnerContainer>
        </LogFormContainer>
    );
};

export default LogForm;
