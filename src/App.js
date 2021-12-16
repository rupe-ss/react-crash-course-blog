import {Routes, Route} from 'react-router-dom';

//import components
import Layout from 'layout/Layout';
import Header from 'components/Header';
import Nav from 'components/Nav';
import Home from 'components/Home';
import NewPost from 'components/NewPost';
import PostPage from 'components/PostPage';
import About from 'components/About';
import Missing from 'components/Missing';
import EditPost from 'components/EditPost';

function App() {
    return (
        <div className='App'>
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
        </div>
    );
}

export default App;
