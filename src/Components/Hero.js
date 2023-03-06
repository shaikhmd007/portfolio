/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import FamousQuotes from './FamousQuotes'

const Hero = () => {
    return (

        // < !--Main Hero Section-- >
        <section className="hero-section py-5 px-4">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center py-5 px-4">
                        <h2>Hello World 🧑🏻‍💻. <strong class="name">Mohammad Shaikh</strong> here.
                            Web dev , software developer
                            & this is my   <strong className="Portfolio-txt h4">PortFolio -</strong> web .
                        </h2>
                        <p className="hero-description">
                            Coder | Student | Learner | Explorer
                        </p>
                        <div className="hero-button-container ">
                            <a href="#projects" className="btn1">My Projects</a>
                            <a target="_blank"
                                href="https://docs.google.com/document/d/1op7HD2PK1LZS9WT_PmxI6cQ4ZiFv2Ww5/edit?usp=sharing&ouid=101685079108711183913&rtpof=true&sd=true"
                                className="btn2" rel="noreferrer">My Resume</a>
                        </div>

                        <h2 className="mt-4">Connect With Me</h2>
                        <hr />
                        {/* <!-- <p>Connect With Me</p> --> */}
                        <div className="socials d-flex ">
                            <p className="gap-2 py-1">
                                <a href="https://linkedin.com/in/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/linked-in-alt.svg" alt="MD Shaikh IN" height={30} width={40} /></a>
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" type="email" target=" blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/Gmail.svg" alt="mail@Mohammad-Shaikh" height={30} width={40} /></a>
                                <a href="https://github.com/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/github.svg" alt="shaikhmd#4950" height={30} width={40} />
                                </a>
                                <a href="https://codepen.io/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/codepen.svg" alt="shaikhmd007" height={30} width={40} /></a>
                                <a href="https://dev.to/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/devto.svg" alt="shaikhmd007" height={30} width={40} /></a>
                                <a href="https://twitter.com/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/twitter.svg" alt="shaikhmd007" height={30} width={40} /></a>
                                <a href="https://stackoverflow.com/users/shaikh-md" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/stack-overflow.svg" alt="shaikh-md" height={30} width={40} /></a>
                                <a href="https://codesandbox.com/shaikh_md.007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/codesandbox.svg" alt="shaikh_md.007" height={30} width={40} /></a>
                                <a href="https://fb.com/md shaikh" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/facebook.svg" alt="md shaikh" height={30} width={40} /></a>
                                <a href="https://instagram.com/shaikh_md.007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/instagram.svg" alt="shaikh_md.007" height={30} width={40} /></a>
                                <a href="https://www.freecodecamp.org/shaikh_md" target="blank"><img src={require("../assets/img/freeCodeCamp.png")} alt="shaikhmd-FreeCodeCamp" height="40px" width="40px" style={{ borderRadius: '50%' }} /></a>
                                <a href="https://medium.com/@ishaikhmd07" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/medium.svg" alt="@ishaikhmd07" height={30} width={40} /></a>
                                <a href="https://www.codechef.com/users/shaikhmd_007" target="blank" className="bg-light"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" alt="shaikhmd_007" height={30} width={40} /></a>
                                <a href="https://www.hackerrank.com/shaikhmd" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/hackerrank.svg" alt="shaikhmd" height={30} width={40} /></a>
                                <a href="https://www.leetcode.com/shaikhmd007" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/leet-code.svg" alt="shaikhmd007" height={30} width={40} /></a>
                                <a href="https://discord.gg/shaikhmd#4950" target="blank"><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/discord.svg" alt="shaikhmd#4950" height={30} width={40} /></a>
                            </p>
                        </div>

                    </div>

                    <div className="hero-image col-md-4 col-sm d-flex justify-content-center align-items-center m-1 p-2">
                        <img src={require('../assets/img/Profile.png')} alt="Profile Picture" className="img-fluid rounded-circle kenburns-top" />
                    </div>
                    <FamousQuotes />

                </div>
            </div>

        </section>
    )
}

export default Hero