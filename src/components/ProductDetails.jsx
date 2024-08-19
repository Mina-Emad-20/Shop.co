import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../api/getProducts"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { getProducts } from "../api/getProducts"
import UserForm from "./UserForm"


export default function ProductDetails() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts(setProducts)
    }, [])

    const [product, setProduct] = useState([])
    const params = useParams()
    useEffect(() => {
        getSingleProduct(setProduct, params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="pro_detalis pb-5">
            <Container>

                <h2 className="text-center pt-5 pb-4">PRODUCT DETAILS</h2>
                <Row>
                    <Col>
                        <Card className="h-100 w-100 mx-auto p-5">
                            <Card.Img className="w-50 align-self-center pt-5" src={product.image} />
                            <Card.Body className="card_body h-50">
                            </Card.Body>
                        </Card></Col>
                    <Col>
                        <Card className="h-100 w-100 mx-auto pt-4 pb-5">
                            <Card.Body className="card_body h-50">
                                <Card.Title className="category">{product.category}</Card.Title>
                                <Card.Title className="title">{product.title}</Card.Title>
                                <p className="description">{product.description}</p>
                                <div className="rating d-flex">
                                    <FontAwesomeIcon icon={faStar} className="rating_star" />
                                    <FontAwesomeIcon icon={faStar} className="rating_star" />
                                    <FontAwesomeIcon icon={faStar} className="rating_star" />
                                    <FontAwesomeIcon icon={faStar} className="rating_star" />
                                    <FontAwesomeIcon icon={faStarHalf} className="rating_star" />
                                    <p className="description">4.5</p>
                                </div>
                                <div className="price">Price: $  {product.price}</div>
                                <div className="line"></div>
                                <div className="colors_part">
                                    <p className="pt-2 fw-bold">Select Colors</p>
                                    <div className="colors d-flex gap-2 pb-4">
                                        <div className="red"></div>
                                        <div className="green"></div>
                                        <div className="blue"></div>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="size_part">
                                    <p className="pt-2 fw-bold">Choose Size</p>
                                    <div className="sizes d-flex gap-2">
                                        <Button variant="danger">Small</Button >
                                        <Button variant="danger">Medium</Button >
                                        <Button variant="danger">Large</Button >
                                        <Button variant="danger">X-Large</Button >
                                    </div>
                                </div>
                            </Card.Body>
                        </Card></Col>
                </Row>
                <div>
                    <h2 className="pt-5 pb-3 text-center">YOU MIGHT ALSO LIKE</h2>
                    <Row className="g-4">
                        {
                            products.filter((_, i) => i > 8 && i <= 12).map(product =>
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
                                            <div className="price">$  {product.price}</div>
                                            <Link to={"/products/" + product.id} className="btn btn-danger">Details</Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                    </Row>
                </div>
            </Container>
            <UserForm />
        </div>
    )

}
