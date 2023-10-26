import logo from '../images/logo.svg';
import '../styles/navbar.css';

function Navbar() {
    return (
        <nav>
            <div className='nav-logo'>
                <img src={logo} alt='Brand Logo' />
            </div>
            <ul className="navbar-link">
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Service</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar