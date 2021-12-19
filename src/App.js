import {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

//import components
import Layout from 'layout/Layout';
import Home from 'components/Home';
import NewPost from 'components/NewPost';
import PostPage from 'components/PostPage';
import About from 'components/About';
import Missing from 'components/Missing';
import EditPost from 'components/EditPost';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'My First Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 2,
            title: 'My 2nd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 3,
            title: 'My 3rd Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
        {
            id: 4,
            title: 'My Fourth Post',
            datetime: 'July 01, 2021 11:17:36 AM',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!',
        },
    ]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        navigate('/');
    };
    return (
        <div className='App'>
            <Layout search={search} setSearch={setSearch}>
                <Routes>
                    <Route exact path='/' element={<Home posts={posts} />} />
                    <Route exact path='/post' element={<NewPost />} />
                    <Route path='/edit/:id' element={<EditPost />} />
                    <Route
                        path='/post/:id'
                        element={
                            <PostPage
                                posts={posts}
                                handleDelete={handleDelete}
                            />
                        }
                    />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<Missing />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
