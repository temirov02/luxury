import React from 'react'
import './footer.scss'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from "react-bootstrap";


const Footer = () => {
    return (
        <div className="startFooter" id="footer23">
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <div className="footerFirst">
                            <h2>LUXURY <br /> <span>hotel</span></h2>
                            <p>497 Evergreen Rd. Roseville, CA 95673
                                +44 345 678 903
                                luxury_hotels@gmail.com</p>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="footerSecond">
                            <Link to="/">About Us </Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Terms & Conditions</Link>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="footerSecond">
                            <Link to="/"><FaFacebookF className="icons" />Facebook </Link>
                            <Link to="/"><FaTwitter  className="icons"/>Twitter</Link>
                            <Link to="/"><FaInstagram className="icons" />Instagram </Link>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <form className="footerThree">
                            <label htmlFor="fname">
                                Subscribe to our newsletter
                            </label>
                            <input type="text" placeholder="Email Address" className="foter" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
