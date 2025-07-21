import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index.js';
import { NavLink } from 'react-router-dom';
import '../css/main.css';

const NavbarComponents = () => {
  return (
    <div>

      <Navbar expand="lg" className="navbar bg-body-tertiary ">
        <Container className=''>
          <Navbar.Brand href="#home">🛒 Al Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-between align-items-cente">
              {navLinks.map((link) => {
                return (<div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  } end>{link.text}</NavLink>

                </div>
                );
              })}
            </Nav>

            <div>
              <NavLink 
                to="/produk" 
                className="btn btn-outline-danger rounded text-decoration-none"
              >
                Belanja sekarang
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponents
