import Header from 'components/Header';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const Layout = ({ children, search, setSearch }) => {
    return (
        <>
            <Header title={'ReactBlog'} />
            <Nav search={search} setSearch={setSearch} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
