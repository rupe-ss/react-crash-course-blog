import React from 'react';

const Nav = ({search, setSearch}) => {
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>SearchPosts</label>
                <input
                    id='search'
                    type='text'
                    placeholder='Search Posts'
                    onChange={(e) => setSearch(e.target.value)}></input>
            </form>
        </nav>
    );
};

export default Nav;
