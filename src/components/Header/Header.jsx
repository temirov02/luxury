import React from 'react'
import './header.scss'
import '../Media/Media.scss'
import { Container, Nav, Row } from "react-bootstrap";
import logo from '../../img/logoheader.png'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaHome, FaChevronDown } from "react-icons/fa";
import hamburger from '../../img/NicePng_hamburger-icon-png_415236.png'
import hamburgerInopen from '../../img/PngItem_2148677.png'

const Header = () => {
    const [openClose, setOpenClose] = useState(hamburger)
    const [headerClass, setHeaderClass] = useState("HomeBackground");
    const [displayChanger, setDisplayChanger] = useState("activeLink")
    let location = useLocation()
    const path = location.pathname.split('/')
    const pageSlug = path[1]

    useEffect(() => {
        if (pageSlug === "facilities") {
            setHeaderClass("FacilitiesBackground")
        }
        if (pageSlug === "rooms") {
            setHeaderClass("RoomsBackground")
        }
        if (pageSlug === "contactus") {
            setHeaderClass("ContactUsBackground")
        }
    }, [pageSlug])

    const handleOpenClose = () => {
        if (openClose === hamburger) {
            setDisplayChanger("mobileMenu")
            setOpenClose(hamburgerInopen)
        }
        else {
            setDisplayChanger("activeLink")
            setOpenClose(hamburger)
        }
    }
    return (
        <div className={headerClass}>
            <Container>
                <Row>
                    <div className="startNav">
                        <div className="mainHeader">
                            <div className="logoBox">
                                <img src={logo} alt="LUXURE" />
                            </div>
                        </div>
                        <Nav className="navBar">
                            <ul className={displayChanger} >
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/facilities">Facilities</Link></li>
                                <li><Link to="/rooms">Rooms</Link></li>
                                <li><Link to="/contactus">Contact-us</Link></li>
                            </ul>
                        </Nav>
                        <div className="navbar-menu">
                            <div className="menuBar">
                                <img src={openClose} onClick={handleOpenClose} alt="" />
                            </div>

                        </div>

                    </div>

                </Row>
                <Row>
                    <div className="header1">
                        welcome to
                        <h1>luxury</h1>
                        <span>hotels</span>
                    </div>
                    <div className="headerActive">
                        <h2>
                            Contact us
                        </h2>
                    </div>
                    <div className="header2">
                        Book your stay and enjoy Luxury
                        redefined at the most affordable rates.
                    </div>
                    <div className="header-button">
                        <button className="btn">< FaHome /><Link>book now</Link></button>
                    </div>
                    <div className="headerEnd">
                        <div className="headerText">
                            Scroll
                        </div>
                        <Link className="headerLogo" to="/"><FaChevronDown /></Link>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default Header
