import React from 'react'
import './Create.scss'
import room1 from '../../img/single.png'
import room2 from '../../img/double.png'
import room3 from '../../img/twin.png'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Carousel } from "react-bootstrap";


const Create = () => {
    return (
        <div className="createStart">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="createBegin">
                            <h2>ROOMS AND RATES</h2>
                            <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes,
                                comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented
                                by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="createCarousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room1}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div className="carouselName">
                                <div className="carouselText">SINGLE ROOM</div>
                            </div>
                            <div className="carouselMenu">
                                <div className="menuStart">
                                    <Link to="/">+</Link>
                                    <p>VIEW ROOM DETAILS</p>
                                </div>
                                <div className="menuEnd">
                                    <button>$155  Avg/night</button>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="createCarousel carouselActive">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room3}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div className="carouselName">
                                <div className="carouselText">SINGLE ROOM</div>
                            </div>
                            <div className="carouselMenu">
                                <div className="menuStart">
                                    <Link to="/">+</Link>
                                    <p>VIEW ROOM DETAILS</p>
                                </div>
                                <div className="menuEnd">
                                    <button>$155  Avg/night</button>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="createCarousel cauoselENd">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room1}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={room3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                            <div className="carouselName">
                                <div className="carouselText">SINGLE ROOM</div>
                            </div>
                            <div className="carouselMenu">
                                <div className="menuStart">
                                    <Link to="/">+</Link>
                                    <p>VIEW ROOM DETAILS</p>
                                </div>
                                <div className="menuEnd">
                                    <button>$155  Avg/night</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Create
