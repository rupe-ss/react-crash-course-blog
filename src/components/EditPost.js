import React from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({ editTitle, setEditTitle, editBody, setEditBody }) => {
    return (
        <main className='NewPost'>
            <form className='newPostForm'>
                <label htmlFor='postTitle'>Title:</label>
                <input
                    id='postTitle'
                    type='text'
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor='postBody'>Post:</label>
                <textarea
                    id='postBody'
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </main>
    );
};

export default EditPost;
