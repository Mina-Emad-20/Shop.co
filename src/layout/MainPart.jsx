import { Col, Container, Row } from "react-bootstrap";
import homeImage from "../assets/images/main-image.png"




export default function MainPart() {
    return (
        <div className="main">
            <Container className="main-container">
                <Row className="">
                    <Col lg={6} sm={12} className="pt-5">
                        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="pt-2 pb-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="main_shop_Now">Shop Now</button>
                        <div className="d-flex gap-5 pt-5 main_rating flex-wrap">
                            <div>
                                <h3>200+</h3>
                                <p>International Brands</p>
                                <span></span>
                            </div>
                            <div>
                                <h3>2,000+</h3>
                                <p>High-Quality Products</p>
                                <span></span>
                            </div>
                            <div>
                                <h3>30,000+</h3>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className="main_image">
                        <img src={homeImage} alt="home image" className="h-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
