/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import FamousQuotes from "./FamousQuotes";
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

const Hero = () => {
    return (
        // < !--Main Hero Section-- >
        <section className="hero-section py-5 px-4">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center py-5 px-4">
                        <h2>
                            Hello World 🧑🏻‍💻. <strong class="name">Mohammad Shaikh</strong>{" "}
                            here. Web dev , software developer & this is my{" "}
                            <strong className="Portfolio-txt h4">PortFolio -</strong> web .
                        </h2>
                        <p className="hero-description">
                            Coder | Student | Learner | Explorer
                        </p>
                        <div className="hero-button-container ">
                            <a href="#projects" className="btn1">
                                My Projects
                            </a>

                            <a
                                target="_blank"
                                href="https://docs.google.com/document/d/1op7HD2PK1LZS9WT_PmxI6cQ4ZiFv2Ww5/edit?usp=sharing&ouid=101685079108711183913&rtpof=true&sd=true"
                                className="btn2"
                                rel="noreferrer"
                            >
                                My Resume
                            </a>
                        </div>

                        <h2 className="mt-4">Connect With Me</h2>
                        <hr />
                        {/* Connect With ME Socials*/}

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

                    <div className="hero-image col-md-4 col-sm d-flex justify-content-center align-items-center m-1 p-2">
                        <img
                            src={require("../assets/img/Profile.png")}
                            alt="Profile Picture"
                            className="img-fluid rounded-circle kenburns-top"
                        />
                    </div>
                    <FamousQuotes />
                </div>
            </div>
        </section>
    );
};

export default Hero;
