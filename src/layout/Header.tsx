import { Link } from "react-router-dom";
import '../styles/Layout.css'

const Header = () => {
    return (
        <nav className="layout header">
            <Link to="/" className="crown-container"><img src="/img/crown.jpg" alt="crown" className="crown" /></Link>
            <Link to="/lebronIntro" className="navTitle">Introduction</Link>
            <Link to="/lebronData" className="navTitle">Data</Link>
        </nav>
    )
}

export default Header;