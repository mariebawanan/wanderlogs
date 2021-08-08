import React, { useState } from 'react';
import { firebaseStorage } from '~firebase/initFirebase';
import {
    UploaderContainer,
    UploaderLabel,
    UploaderPreview,
    UploaderPreviewImg,
    UploaderProgress,
} from '~styles/components';

type UploaderProps = {
    url: string;
    setUrl: (url: string) => void;
};

const Upload = ({ url, setUrl }: UploaderProps) => {
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const input = e.target as HTMLInputElement;
        if (!input.files?.length) return;

        const image = input.files[0];

        setIsUploading(true);

        const uploadTask = firebaseStorage.ref(`covers/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => console.error(error),
            () => {
                firebaseStorage
                    .ref('covers')
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                    });
                setIsUploading(false);
            }
        );
    };

    return (
        <UploaderContainer>
            <UploaderLabel>
                <input type="file" multiple onChange={handleChange} />
                Upload Cover Photo
            </UploaderLabel>

            {isUploading && (
                <div>
                    <UploaderProgress value={progress} max="100" />
                    Uploading... {progress}
                </div>
            )}
            {url && (
                <UploaderPreview>
                    <UploaderPreviewImg src={url} alt="cover photo" />
                </UploaderPreview>
            )}
        </UploaderContainer>
    );
};

export default Upload;
