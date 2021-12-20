import { useContext } from 'react';
//import components
import Feed from 'components/Feed';
import DataContext from 'contexts/DataContext';

const Home = () => {
    const { posts, fetchError, isLoading } = useContext(DataContext);
    return (
        <main className='Home'>
            {isLoading && <p className='statusMsg'> Loading posts...</p>}
            {!isLoading && fetchError && (
                <p className='statusMsg' style={{ color: 'red' }}>
                    {fetchError}
                </p>
            )}
            {!isLoading &&
                !fetchError &&
                (posts.length ? (
                    <Feed posts={posts} />
                ) : (
                    <p style={{ marginTop: '2rem' }}>No posts to display.</p>
                ))}
            {/* Writing again when new props */}
            {/* {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: '2rem' }}>No posts to display.</p>
            )} */}
        </main>
    );
};

export default Home;
