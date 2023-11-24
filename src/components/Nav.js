import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <ul className="holder">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/galeria">Galería</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;