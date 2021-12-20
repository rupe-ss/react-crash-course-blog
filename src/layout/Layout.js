import Header from 'components/Header';
import Nav from 'components/Nav';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header title={'ReactBlog'} />
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
