import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconNotification from './icons/iconNotification';
import logo from "../assets/home7.jpg"
import Span from './Layouts/Span';
import { UserContext } from './userContext';
import { useContext } from 'react';
import { NavLink , useNavigate } from "react-router-dom"

function Header() {

    const navigate = useNavigate()

    const { isLogin, toggleLogin } = useContext(UserContext)

    const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Navbar expand="lg" className="bg-dark-tertiary p-0 fixed-top" style={{ backgroundColor: "blue" }} >
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="" width="60px" height="60px" className='rounded-circle' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item className="mx-3 my-2">
                            <NavLink to="/" className="text-white text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Home</NavLink>
                        </Nav.Item>
                        {isLogin &&
                            <Nav.Item className="mx-3 my-2 d-flex" >
                                <IconNotification />
                            </Nav.Item>
                        }
                        <Nav.Item className="mx-3 my-2">{isLogin ?
                            <span className="text-white text-decoration-none fw-bold" style={{ fontSize: "1.3em" }} to="/">{"Welcome " + user.name}</span> :
                            <NavLink to="/Login" className="text-white text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Login</NavLink>}
                        </Nav.Item>
                        <Nav.Item className="mx-3 my-2">{isLogin ?
                            <i className="text-white text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}
                               onClick={() => {
                                localStorage.clear()
                                toggleLogin()
                                navigate("/")
                            }}><Span value="Logaout" /></i> :
                            <NavLink to="/Register" className="text-white text-decoration-none fw-bold" style={{ fontSize: "1.3em" }}>Register</NavLink>}
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
     </Navbar>
  );
}

export default Header;