import { NavLink } from "react-router-dom";
import { Nav, Container, Navbar } from 'react-bootstrap';



export default function SiteNav() {


    return (
        <>
            <Navbar expand="lg nav_bar" >
                <Container>
                    <NavLink to='/' className="nav-link barnd_name"><h2>Shop.co</h2></NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto"
                            navbarScroll
                        >
                            <NavLink to='/' className="nav-link">Home</NavLink>
                            <NavLink to='/new arrivals' className="nav-link">New Arrivals</NavLink>
                            <NavLink to='/products' className="nav-link">Products</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
