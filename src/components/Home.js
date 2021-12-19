//import components
import Feed from 'components/Feed';

const Home = ({posts}) => {
    return (
        <main>
            {posts.length ? (
                posts.map((post) => <div>{post.title}</div>)
            ) : (
                <p style={{marginTop: '2rem'}}>No posts to display.</p>
            )}
            {/* {posts.length ? (
                <div> {posts} </div>
            ) : (
                <p style={{marginTop: '2rem'}}>No posts to display.</p>
            )} */}
        </main>
    );
};

export default Home;
