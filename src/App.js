import logo from './logo.svg';
import './App.css';
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

function App() {
    return (
        <div className='App'>
            <Layout />
            <Header />
            <Nav />
            <Home />
            <NewPost />
            <PostPage />
            <About />
            <Missing />
        </div>
    );
}

export default App;
