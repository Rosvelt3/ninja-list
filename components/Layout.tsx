import { FunctionComponent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div className='content'>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

type LayoutProps = {
    dude?: string,
}

export default Layout;