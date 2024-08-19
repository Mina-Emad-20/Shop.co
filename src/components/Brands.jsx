import { Container } from "react-bootstrap";
import cOne from "../assets/images/clients/c1.png"
import cTwo from "../assets/images/clients/c2.png"
import cThree from "../assets/images/clients/c3.png"
import cFour from "../assets/images/clients/c4.png"
import cFive from "../assets/images/clients/c5.png"
export default function Brands() {
    return (
        <div className="brands_bar">
            <Container>
                <div className="brands_logos d-flex justify-content-between pt-3 pb-3">

                    <img src={cOne} alt="brand one" />
                    <img src={cTwo} alt="brand two" />
                    <img src={cThree} alt="brand three" />
                    <img src={cFour} alt="brand four" />
                    <img src={cFive} alt="brand five" />

                </div>
            </Container>
        </div>
    )
}
