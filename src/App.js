import { Route, Routes } from 'react-router-dom';
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

    return (
        <div className='App'>
            <DataProvider>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/post' element={<NewPost />} />
                        <Route path='/edit/:id' element={<EditPost />} />
                        <Route path='/post/:id' element={<PostPage />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<Missing />} />
                    </Routes>
                </Layout>
            </DataProvider>
        </div>
    );
}

export default App;
