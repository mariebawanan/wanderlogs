import React, { useState, useEffect } from 'react';
import { Map } from 'immutable';
import {
    firebase,
    firebaseDBLogs,
    firebaseLooper,
} from '~firebase/initFirebase';
import useField from '~hooks/useField';
import { Uploader } from '~components';
import { useHistory } from 'react-router-dom';
import {
    Form,
    InputGroup,
    EditorWrapper,
    Input,
    InputLabel,
    Button,
} from '~styles/components';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const editorStyle = {
    height: '350px',
};

const Write = () => {
    const [title, setTitle] = useField('');
    const [body, setBody] = useState<any>();
    const [tags, setTags] = useField('');
    const [urls, setUrls] = useState<string[]>([]);
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const history = useHistory();

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        const slug = formatSlug(title);
        firebaseDBLogs.push({
            title,
            body: body.trim(),
            tags,
            date: firebase.database.ServerValue.TIMESTAMP,
            slug: slug,
            images: urls,
        });
        history.push(`/feed/${slug}`);
    };

    const formatSlug = (url: string) =>
        (url = url
            .replace(/[^\w\s]/gi, '')
            .trim()
            .replace(/\s+/g, '-')
            .toLowerCase());

    const onEditorStateChange = (editorState: any) => {
        let contentState = editorState.getCurrentContent();
        let html = stateToHTML(contentState);
        setBody(html);
        setEditorState(editorState);
    };

    return (
        <Form>
            <InputGroup>
                <InputLabel>Title</InputLabel>
                <Input
                    name="title"
                    value={title}
                    onChange={setTitle}
                />
            </InputGroup>
            <InputGroup>
                <InputLabel>Body</InputLabel>
                <EditorWrapper>
                    <Editor
                        editorStyle={editorStyle}
                        editorState={editorState}
                        onEditorStateChange={onEditorStateChange}
                        toolbar={{
                            options: [
                                'inline',
                                'blockType',
                                'fontSize',
                                'list',
                                'textAlign',
                                'colorPicker',
                                'link',
                                'embedded',
                                'emoji',
                                'image',
                                'remove',
                                'history',
                            ],
                        }}
                    />
                </EditorWrapper>
            </InputGroup>

            <Uploader urls={urls} setUrls={setUrls} />
            <Button onClick={handleSubmit}>Log it</Button>
        </Form>
    );
};

export default Write;
