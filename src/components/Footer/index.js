import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles";


import './index.css';
import './smollogo.png'
  
const Footer = () => {
  return (
    <Box id="footer">
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://www.facebook.com/cascadecuttingservices" target="_blank">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.yelp.com/biz/cascade-cutting-services-roseburg" target="_blank">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Yelp
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;