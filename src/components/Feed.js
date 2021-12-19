import Post from './Post';

const Feed = ({posts}) => {
    return (
        <>
            {posts.map((post) => (
                <div>{post.title}</div>
            ))}
        </>
    );
};

export default Feed;
