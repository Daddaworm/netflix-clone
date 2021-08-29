import React, { useState, useEffect } from 'react'
import { Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './Nav.css'


const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20160220053054%21Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />


            {/* <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
            /> */}
            <div className="dropdown__menu">
                <Dropdown>
                    <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                        <img
                            className="nav__avatar"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="Netflix Avatar"
                        />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Sign-up</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Nav
