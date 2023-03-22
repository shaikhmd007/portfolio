/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LinkedIn from '../assets/img/linked-in-alt.svg'
import gitHub from '../assets/img/github.svg'
import codepen from '../assets/img/codepen.svg'
import devto from '../assets/img/devto.svg'
import twitter from '../assets/img/twitter.svg'
import stackOverflow from '../assets/img/stack-overflow.svg'
import codesandbox from '../assets/img/codesandbox.svg'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import freeCodeCamp from '../assets/img/freeCodeCamp.png'
import Gmail from '../assets/img/Gmail.svg'
import Medium from '../assets/img/medium.svg'
import hackerrank from '../assets/img/hackerrank.svg'
import leetcode from '../assets/img/leet-code.svg'
import discord from '../assets/img/discord.svg'
const Footer = () => {
    return (

        < footer className="footer text-white" >
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column ">
                        <h1 className="mb-3 projects-heading">Let's Connect <i className="bi-person-plus" /> </h1>
                        <a className="text-white text-decoration-none">
                            <i className="bi-envelope-fill  text-white" />  &nbsp;
                            ishaikhmd07@gmail.com | <br />
                            shaikhmohammad520@gmail.com
                        </a>
                        <a className="text-white text-decoration-none">
                            <i className=" bi-phone me-1" />/
                            <i className="bi bi-whatsapp" /> &nbsp;
                            +91 7738866507 </a>
                        <hr className="mt-3" />
                        {/* <!-- <p>Connect With Me</p> --> */}

                        <div className="socials d-flex ">
                            <p className="gap-2 py-1">
                                <a href="https://linkedin.com/in/shaikhmd007" target="blank">
                                    <img
                                        src={LinkedIn}
                                        alt="MD Shaikh IN"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a
                                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                                    type="email"
                                    target=" blank"
                                >
                                    <img
                                        src={Gmail}
                                        alt="mohammad shaikh"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://github.com/shaikhmd007" target="blank">
                                    <img
                                        src={gitHub}
                                        alt="shaikhmd#4950"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://codepen.io/shaikhmd007" target="blank">
                                    <img
                                        src={codepen}
                                        alt="shaikhmd007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://dev.to/shaikhmd007" target="blank">
                                    <img
                                        src={devto}
                                        alt="shaikhmd007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://twitter.com/shaikhmd007" target="blank">
                                    <img
                                        src={twitter}
                                        alt="shaikhmd007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a
                                    href="https://stackoverflow.com/users/shaikh-md"
                                    target="blank"
                                >
                                    <img
                                        src={stackOverflow}
                                        alt="shaikh-md"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://codesandbox.com/shaikh_md.007" target="blank">
                                    <img
                                        src={codesandbox}
                                        alt="shaikh_md.007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://fb.com/md shaikh" target="blank">
                                    <img
                                        src={facebook}
                                        alt="md shaikh"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://instagram.com/shaikh_md.007" target="blank">
                                    <img
                                        src={instagram}
                                        alt="shaikh_md.007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://www.freecodecamp.org/shaikh_md" target="blank">
                                    <img
                                        src={freeCodeCamp}
                                        alt="shaikhmd-FreeCodeCamp"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://medium.com/@ishaikhmd07" target="blank">
                                    <img
                                        src={Medium}
                                        alt="@ishaikhmd07"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                {/*   <a href="https://www.codechef.com/users/shaikhmd_007" target="blank" class="bg-light">
          <img src="./assets/img/codechef.svg" alt="shaikhmd_007" height="30" width="40" /></a> */}
                                <a href="https://www.hackerrank.com/shaikhmd" target="blank">
                                    <img
                                        src={hackerrank}
                                        alt="shaikhmd"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://www.leetcode.com/shaikhmd007" target="blank">
                                    <img
                                        src={leetcode}
                                        alt="shaikhmd007"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                                <a href="https://discord.gg/shaikhmd#4950" target="blank">
                                    <img
                                        src={discord}
                                        alt="shaikhmd#4950"
                                        className="Tech-Icons-Svg"
                                    />
                                </a>
                            </p>
                        </div>

                    </div>
                    <hr className="mt-3" />

                    <a className="navbar-brand" href="#">
                        <img src={require("../assets/img/logo3.jpg")} alt="logo" className="logo" />
                        ↣   ⫸⋯⋯⋯↣↻
                    </a>

                    <hr className='mt-3' />
                    <p className="text-white Copyright text-center">Copyright © <span className="dev-is"> shaikh_md. </span> 2023</p>

                </div>
            </div>
        </footer >

    )
}

export default Footer