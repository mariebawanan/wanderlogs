import React from 'react';
import useField from '~hooks/useField';
import { Input } from '~styles/components';

const Search = () => {
    const [search, setSearch] = useField('');

    return <Input value={search} onChange={setSearch} placeholder="Search for logs" />;
};

export default Search;
