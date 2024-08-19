import { useEffect, useState } from "react"
import { getProducts } from "../api/getProducts"
import { Col, Container, Row, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'


export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts(setProducts)
    }, [])



    let handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure oyu want to Delete this Product?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                setProducts(products.filter(p => p.id !== id))
                fetch('http://localhost:3000/products/' + id, { method: 'DELETE' })
            }
        });
    }

    return (
        <div className="viewed_products">
            <Container>
                <h2 className="pt-5 pb-3 text-center">PRODUCTS</h2>
                <Row className="g-4 pb-5">
                    {
                        products.length > 0
                            ?
                            products.map(product =>
                                <Col className="p-3" key={product.id} lg={3} md={3} sm={12}>
                                    <Card className="h-100">
                                        <Card.Img className="w-50 h-50 align-self-center pt-5" variant="bottom" src={product.image} />
                                        <Card.Body className="card_body h-50">
                                            <Card.Title>{product.title}</Card.Title>
                                            <div className="rating d-flex">
                                                <FontAwesomeIcon icon={faStar} className="rating_star" />
                                                <FontAwesomeIcon icon={faStar} className="rating_star" />
                                                <FontAwesomeIcon icon={faStar} className="rating_star" />
                                                <FontAwesomeIcon icon={faStar} className="rating_star" />
                                                <FontAwesomeIcon icon={faStarHalf} className="rating_star" />
                                                <p>4.5</p>
                                            </div>
                                            <div className="price">Price: $  {product.price}</div>

                                        </Card.Body>
                                        <div className="card-footer d-flex justify-content-around">
                                            <Link to={"/products/" + product.id} className="btn btn-dark ">Details</Link>
                                            <Link to={"/products/edit/" + product.id} className="btn btn-warning ">Edit</Link>
                                            <Button variant="danger" onClick={() => handelDelete(product.id)}>Delete</Button>
                                        </div>
                                    </Card>

                                </Col>
                            )
                            :
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                    }
                </Row>
            </Container>
        </div>
    )
}
