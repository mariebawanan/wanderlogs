import React, { ChangeEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~redux/reducers';

import { firebaseStorage } from '~firebase/initFirebase';
import {
    UploaderContainer,
    UploaderLabel,
    UploaderPreview,
    UploaderPreviewImg,
    UploaderProgress,
} from '~styles/components';

type Props = {
    urls: string[];
    setUrls: (urls: string[]) => void;
};

type Image = {
    id: number;
    name: string;
    lastModified: Date;
    lastModifiedDate: Date;
};

const Upload = ({ urls, setUrls }: Props) => {
    const [images, setImages] = useState<{}[]>([]);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleChange = (e: Event) => {
        e.preventDefault();

        const input = e.target as HTMLInputElement;

        if (!input.files?.length) return;

        setIsUploading(true);
        const promises = [];
        for (const [key, value] of Object.entries(input.files)) {
            if (input.files?.length) {
                const newImage: File = value;
                setImages((prevState) => [...prevState, newImage]);

                const uploadTask = firebaseStorage
                    .ref(`images/${newImage.name}`)
                    .put(newImage);

                promises.push(uploadTask);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred /
                                snapshot.totalBytes) *
                                100
                        );
                        setProgress(progress);
                    },
                    (error) => console.error(error),
                    async () => {
                        await firebaseStorage
                            .ref('images')
                            .child(newImage.name)
                            .getDownloadURL()
                            .then((urls) =>
                                setUrls((prevState) => [
                                    ...prevState,
                                    urls,
                                ])
                            );
                    }
                );
            }
        }

        Promise.all(promises).then(() => setIsUploading(false));
    };

    return (
        <UploaderContainer>
            <UploaderLabel className="custom-file-upload">
                <input type="file" multiple onChange={handleChange} />
                Upload images
            </UploaderLabel>

            {isUploading && (
                <div>
                    <UploaderProgress value={progress} max="100" />
                    Uploading... {progress}
                </div>
            )}

            <UploaderPreview>
                {urls.map((url: string, i: number) => (
                    <UploaderPreviewImg
                        key={i}
                        src={url}
                        alt="firebase-image"
                    />
                ))}
            </UploaderPreview>
        </UploaderContainer>
    );
};

export default Upload;
