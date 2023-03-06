/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
    return (
        // < !--navbar starting here-- >
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container ">
                <a className="navbar-brand" href="#">
                    <img src={require('../assets/img/logo.jpg')} alt="logo" className="logo" />
                    <strong className="Portfolio-txt">PortFolio.</strong>
                    {/* <!-- <span>shaikh_md </span> --> */}
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"> About </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills"> Skills </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects"> Projects </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume-section"> My CV resume </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar