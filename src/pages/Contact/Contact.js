import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./index.css";
function Contact() {
    return (
        <>
            <Card id="card-main" style={{ width: "60vw" }}>
                <Card.Img
                    id="card-img"
                    variant="top"
                    src={require("./smollogo.png")}
                />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <b>
                            Call or Email Cascade Cutting Services for your FREE
                            quote.
                        </b>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        Phone:
                        <a href="tel:5416711621">(541) 671-1621</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Email:
                        <a href="mailto:ccs.llc.defend@gmail.com">
                            ccs.llc.defend@gmail.com
                        </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <br></br>
                        Serving Roseburg and surrounding areas
                        <br></br>
                        <br></br>
                        <iframe
                            title="google iframe of business address"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.8333936701256!2d-123.32553174933682!3d43.212983688700845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c42318583f7ca1%3A0x69379d3203cd1674!2sNE%20Diamond%20Lake%20Blvd%2C%20Oregon%2097470!5e0!3m2!1sen!2sus!4v1671741327426!5m2!1sen!2sus"
                            width="70%"
                            height="90%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <br></br>
                        <br></br>
                    </ListGroup.Item>
                    <div>
                      <br></br>
                    <Card.Link href="https://www.facebook.com/cascadecuttingservices/">
                        <img
                            className="link-logos"
                            alt="facebook logo"
                            src={require("./facebook-logo-13.png")}
                        ></img>
                    </Card.Link>
                    <Card.Link href="https://www.yelp.com/biz/cascade-cutting-services-roseburg">
                        <img
                            className="link-logos"
                            alt="yelp logo"
                            src={require("./yelp-logo.png")}
                        ></img>
                    </Card.Link>
                    </div>
                </ListGroup>
            </Card>
            <br></br>
        </>
    );
}

export default Contact;
