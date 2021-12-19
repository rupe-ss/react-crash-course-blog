import Header from 'components/Header';
import Nav from 'components/Nav';

const Layout = ({ children, search, setSearch }) => {
    return (
        <>
            <Header title={'ReactBlog'} />
            <Nav search={search} setSearch={setSearch} />
            {children}
        </>
    );
};

export default Layout;
