import React from 'react'
import './section.scss'
import img1 from '../../img/humphrey-muleba-LOA2mTj1vhc-unsplash 1.png'
import img2 from '../../img/bar.png'
import img3 from '../../img/spa.png'
import img4 from '../../img/pool.png'
import img5 from '../../img/restaurant.png'
import img6 from '../../img/laundry.png'
import { Row, Container, Col } from 'react-bootstrap'
import '../Media/Media.scss'

const Section = () => {
    return (
        <div className="sectionStart">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="sectionText">
                            <h2>FACILITIES</h2>
                            <p>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                                that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                                and our modern luxury resort facilities will help you enjoy the best of all. </p>
                        </div>
                    </Col>
                    <Col xs={12} md={12}>
                        <div className="sectionCard">
                            <div className="sectionImages">
                                <img src={img1} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">The gym</div>
                                </div>
                            </div>
                            <div className="sectionImages">
                                <img src={img2} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">POOLSIDE BAR</div>
                                </div>
                            </div>
                            <div className="sectionImages">
                                <img src={img3} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">The spa</div>
                                </div>
                            </div>
                            <div className="sectionImages">
                                <img src={img4} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">swimming </div>
                                </div>
                            </div>
                            <div className="sectionImages">
                                <img src={img5} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">ReSTAURANT</div>
                                </div>
                            </div>
                            <div className="sectionImages">
                                <img src={img6} alt="THE GYM" />
                                <div className="imgCard">
                                    <div className="cardName">LAUNDRY</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Section
