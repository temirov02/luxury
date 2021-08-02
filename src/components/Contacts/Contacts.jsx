import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import './Contacts.scss'
import '../Media/Media.scss'

const Contacts = () => {
    return (
        <div className="conactusCss">
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="contactStart">
                            <h2>WE ARE HERE FOR YOU</h2>
                            <p>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                                please forward it to our support desk and we will get back to you as soon as possible.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="contactEnd">
                            <p className="pStart">
                                497 Evergreen Rd. Roseville,
                                CA 95673
                            </p>
                            <button>View map <FaArrowRight /></button>
                            <p className="pEnd">Phone: +44 345 678 903 <br />
                                Email: luxury_hotels@gmail.com</p>
                        </div>

                    </Col>
                    <Col xs={12} md={6}>
                        <div className="inputBase">
                            <form >
                                <label htmlFor="fname">
                                    Name
                                </label>
                                <input type="text" className="fter" />
                            </form>
                            <form className="footerThree">
                                <label htmlFor="fname">
                                    Email Address
                                </label>
                                <input type="text" className="fter" />
                            </form>
                            <form className="footerThree">
                                <label htmlFor="fname">
                                    Message
                                </label>
                                <textarea rows="4" cols="50" name="comment" form="usrform">
                                    Enter text here...</textarea>
                            </form>
                            <div className="buttonEnd">
                                <button>submit</button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts
