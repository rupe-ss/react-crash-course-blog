import Header from 'components/Header';
import Nav from 'components/Nav';

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Nav />
            {children}
        </div>
    );
};

export default Layout;
