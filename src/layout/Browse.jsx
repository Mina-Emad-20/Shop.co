import { Container, CardBody, Row, Col, Card } from "react-bootstrap";

export default function Browse() {
    return (
        <div className="browse pb-5 pt-5">
            <Container>
                <CardBody className=" pb-5 card_body p-5">
                    <h2 className=" pt-4 pb-4 text-center">BROWSE BY DRESS STYLE</h2>
                    <Row className=" m-2 gy-4 ">
                        <Col className="casual_card" lg={4}>
                            <Card className="top_left">

                                <h3>Casual</h3>
                            </Card>
                        </Col>
                        <Col className="formal_card" lg={8}>
                            <Card className="top_right">

                                <h3>Formal</h3>
                            </Card>
                        </Col>
                        <Col className="party_card" lg={8}>
                            <Card className="bottom_left">

                                <h3>Party</h3>
                            </Card>
                        </Col>
                        <Col className="gym_card" lg={4}>
                            <Card className="bottom_right">

                                <h3>Gym</h3>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Container>
        </div>
    )
}
