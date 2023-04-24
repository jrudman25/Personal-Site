import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

const Sidebar = () => {

    return (
        <Menu>
                <>
                    <a className="bm-item" href="/home">
                        Home
                    </a>
                    <a className="bm-item" href="/stars">
                        Stars
                    </a>
                </>

        </Menu>
    );
};

export default Sidebar;
