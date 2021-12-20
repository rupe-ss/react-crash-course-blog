import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext, { DataProvider } from 'contexts/DataContext';

const Nav = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>SearchPosts</label>
                <input
                    id='search'
                    type='text'
                    value={search}
                    placeholder='Search Posts'
                    onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='post'>Post</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
