import { Col, Container, Row } from "react-bootstrap";

export default function UserForm() {
    return (
        <div className="user_form pt-5 pb-5">
            <Container>
                <Row className="form_body pt-4 pb-4 p-5">
                    <Col lg={6} md={6} sm={12}>
                        <h2 className="fw-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <form className="d-grid px-5 gap-4 pt-3">
                            <input type="email" placeholder="  Enter your email" />
                            <button>Subscribe to Newsletter</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
