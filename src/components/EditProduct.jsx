import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleProduct } from "../api/getProducts"
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap"




export default function EditProduct() {

    let navigate = useNavigate()
    const [product, setProduct] = useState({})
    const params = useParams()
    useEffect(() => {
        getSingleProduct(setProduct, params.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let handelEdit = (ev) => {
        setProduct({ ...product, [ev.target.name]: ev.target.value })
    }

    let handelSubmitted = () => {
        fetch('http://localhost:3000/products/' + product.id, { method: 'PUT', body: JSON.stringify(product) })
        navigate('/Products/' + product.id)
    }

    return (
        <div className="pro_detalis pb-5">
            <Container>
                <h2 className="text-center pt-5 pb-4">Edit Product</h2>
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
                                {/* <Card.Title className="category">{product.category}</Card.Title> */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bolder">Edit Category</Form.Label>
                                    <Form.Control type="Title" name="category" onChange={handelEdit} placeholder="Product New Gategory" />
                                </Form.Group>

                                {/* <Card.Title className="title">{product.title}</Card.Title> */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bolder">Edit Title</Form.Label>
                                    <Form.Control type="Title" name="title" onChange={handelEdit} placeholder="Product New Title" />
                                </Form.Group>

                                {/* <p className="description">{product.description}</p> */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bolder">Edit Description</Form.Label>
                                    <Form.Control type="Title" name="description" onChange={handelEdit} placeholder="Product New Description" />
                                </Form.Group>

                                {/* <div className="price">Price: $  {product.price}</div> */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bolder">Edit Price</Form.Label>
                                    <Form.Control type="Title" name="price" onChange={handelEdit} placeholder="Product New Price" />
                                </Form.Group>

                                <Button variant="success" onClick={handelSubmitted} >Submit</Button>

                                <div className="line pt-4"></div>
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
            </Container>
        </div>
    )

}
