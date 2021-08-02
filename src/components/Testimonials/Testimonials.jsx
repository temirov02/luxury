import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa'
import { Container, Col, Row } from "react-bootstrap";
import './Testimonials.scss'

const Testimonials = () => {
    return (
        <div>
            <Container>
            <Row >
                    <Col xs={12} md={12}>
                        <div className="cardEnd">
                            <h2>Testimonials</h2>
                            <p>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
                            <p> Mr. and Mrs. Baxter, UK</p>
                            <div className="cardLinkws">
                                <Link to="/" className="cardLink"><FaAngleLeft /></Link>
                                <Link to="/" className="cardLink"><FaAngleRight /></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials
