import { useState } from 'react';

const useField = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) =>
        setValue((e.target as HTMLInputElement).value);

    return [value, handleUpdate] as const;
};

export default useField;
