import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Custom Hook import
import useWindowSize from 'hooks/useWindowSize';
import useAxiosFetch from 'hooks/useAxiosFetch';

const DataContext = createContext({});

//Here I understand how it is working, DataProvider has a props children just like Layout.js has one.
// DataContext.Provider will provide the value to all the children that is wrapped with
// <DataProvider></DataProvider>
export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const navigate = useNavigate();
    const { data, fetchError, isLoading } = useAxiosFetch(
        'http://localhost:5000/posts'
    );

    useEffect(() => {
        setPosts(data);
    }, [data]);
    const { width } = useWindowSize();
    return (
        <DataContext.Provider value={{ width, search, setSearch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
