import React from 'react';

const NewPost = () => {
    return (
        <main>
            <h2>New Post</h2>
            <form>
                <label htmlFor='postTitle'>Title:</label>
                <input id='postTitle' type='text' required />
                <label htmlFor='postBody'>Post:</label>
                <textarea id='postBody' required />
                <button type='submit'>Submit</button>
            </form>
        </main>
    );
};

export default NewPost;
