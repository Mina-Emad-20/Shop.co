import { NavLink } from "react-router-dom";
import { Nav, Button, Container, Form, Navbar } from 'react-bootstrap';
import { useState } from "react";



export default function SiteNav() {
    //! search
    const [products, setProducts] = useState([])
    const [searchValue, setSearchValue] = useState('')
    let handelSearchValue = (e) => {
        setSearchValue(e.target.value)
        fetch('https://fakestoreapi.com/carts?userId=' + e.target.value)
            .then(res => res.json())
            .then(res => setProducts(res))
        setProducts(products.filter((product) => product.title.includes(searchValue) && searchValue !== ''))

    }
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
                        <Form className="d-flex">
                            <input
                                type="text"
                                onChange={handelSearchValue}
                                placeholder=" Search"
                                className="me-2"
                            />
                            <Button variant="outline-danger rounded">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
