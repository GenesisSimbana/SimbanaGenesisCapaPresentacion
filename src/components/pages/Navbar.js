import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';  // Asegúrate de importar FontAwesome

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <i className="fa fa-cogs"></i> Microservicios
      </Link>
      <div className="collapse navbar-collapse justify-content-end">  {/* Aquí se agrega la clase justify-content-end */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/usuarios">
              <i className="fa fa-users"></i> Usuarios
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cursos">
              <i className="fa fa-graduation-cap"></i> Cursos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/matricular">
              <i className="fa fa-book me-2"></i> Matricular Usuario
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
