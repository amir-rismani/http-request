import { NavLink } from "react-router-dom";
import './Navigation.css';

const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/add-comment', title: 'Add Comment' },
];

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    {navLinks.map(navLink => <li key={navLink.path}><NavLink to={navLink.path} activeclassname="active">{navLink.title}</NavLink></li>)}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;