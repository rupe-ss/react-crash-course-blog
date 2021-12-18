import Header from 'components/Header';
import Nav from 'components/Nav';

const Layout = ({children}) => {
    return (
        <>
            <Header title={'ReactBlog'} />
            <Nav />
            {children}
        </>
    );
};

export default Layout;
