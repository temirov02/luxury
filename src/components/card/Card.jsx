import React from 'react'
import { Container, Col, Row } from "react-bootstrap";
import card1 from '../../img/foto1.png'
import card2 from '../../img/foto2.png'
import './Card.scss'

const Card = () => {
    return (
        <div className="cardStart">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="cardTitle">
                            <p className="cardFirstTitle">All our room types are including complementary breakfast</p>
                        </div>
                    </Col>
                </Row>

                <Row className="cardRow">
                    <Col xs={12} md={6}>
                        <div className="cardText">
                            <div className="cardSartText">
                                <h2>Luxury redefined</h2>
                                <p>Our rooms are designed to transport
                                    you into an environment made for leisure.
                                    Take your mind off the day-to-day of home
                                    life and find a private paradise for yourself.</p>
                                <button>EXPLORE</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="cardImg">
                            <img src={card1} alt="sea" />
                        </div>
                    </Col>
                </Row>
                <Row className="cardsRow">
                    <Col xs={12} md={6}>
                        <div className="cardText">
                            <div className="cardSartText">
                                <h2>Leave your worries in
                                    the sand</h2>
                                <p>We love life at the beach. Being close
                                    to the ocean with access to endless sandy
                                    beach ensures a relaxed state of mind. It
                                    seems like time stands still watching the
                                    ocean. </p>
                                <button>EXPLORE</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="cardImg">
                            <img src={card2} alt="sea" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card
