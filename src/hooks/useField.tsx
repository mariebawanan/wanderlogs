import { useCallback, useState } from 'react';

const useField = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleUpdate = useCallback(
        ({ currentTarget: { value } }) => {
            setValue(value);
        },
        []
    );

    return [value, handleUpdate] as const;
};

export default useField;
