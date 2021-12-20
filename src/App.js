import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from 'api/posts';
import useAxiosFetch from 'hooks/useAxiosFetch';
import { DataProvider } from 'contexts/DataContext';

//import components
import Layout from 'layout/Layout';
import Home from 'components/Home';
import NewPost from 'components/NewPost';
import PostPage from 'components/PostPage';
import About from 'components/About';
import Missing from 'components/Missing';
import EditPost from 'components/EditPost';

function App() {
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

    //After using hook this useEffect will be different
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await api.get('/posts');
    //             // if (response.data) throw Error('This is just testing error.');
    //             setPosts(response.data);
    //         } catch (err) {
    //             if (err.response) {
    //                 // Not in the 200 response range
    //                 console.log(err);
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers);
    //             } else {
    //                 console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     };

    //     fetchPosts();
    // }, []);

    useEffect(() => {
        const filterResults = posts.filter(
            (post) =>
                post.body.toLowerCase().includes(search.toLowerCase()) ||
                post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filterResults.reverse());
    }, [posts, search]);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const postsList = posts.filter((post) => post.id !== id);
            setPosts(postsList);
            navigate('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    };

    return (
        <div className='App'>
            <DataProvider>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/post' element={<NewPost />} />
                        <Route path='/edit/:id' element={<EditPost />} />
                        <Route
                            path='/post/:id'
                            element={
                                <PostPage
                                    posts={searchResults}
                                    handleDelete={handleDelete}
                                />
                            }
                        />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<Missing />} />
                    </Routes>
                </Layout>
            </DataProvider>
        </div>
    );
}

export default App;
