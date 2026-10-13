import { NavLink } from 'react-router-dom';
import './header-nav.css';

function HeaderNav(props: { isUserLogged: boolean}) {
    return (
        <nav className="header-nav">
            <ul>
                <li><NavLink to='/'>Home</NavLink><span>|</span></li>
                {
                    props.isUserLogged && <li><NavLink to='/posts'>My post</NavLink><span>|</span></li>
                }
                {
                    props.isUserLogged ?
                        <li><NavLink to='/profile'>User profile</NavLink></li> :
                        <li><NavLink to='/login'>Login</NavLink></li>
                }
            </ul>
        </nav>
    );
}

export default HeaderNav;