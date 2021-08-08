import React, { useState } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const editorStyle = {
    minHeight: '350px',
    height: 'auto',
    cursor: 'text',
};

const editorConfig = {
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
};

const useEditor = (initialBody: string, initialEditorState: EditorState) => {
    const [editorState, setEditorState] = useState(initialEditorState);
    const [body, setBody] = useState<string>(initialBody);

    const onEditorStateChange = (editorState: EditorState) => {
        let contentState = editorState.getCurrentContent();
        let html = stateToHTML(contentState);
        setBody(html);
        setEditorState(editorState);
    };

    const EditorInput = () => (
        <Editor
            editorStyle={editorStyle}
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            toolbar={editorConfig}
        />
    );

    return [body, EditorInput];
};

export default useEditor;
