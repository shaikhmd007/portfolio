/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (

        < footer className="footer text-white" >
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-column">
                        <h1 className="mb-3 projects-heading">Let's Connect <i className="bi-person-plus" /></h1>
                        <a className="text-white text-decoration-none" href="https://www.google.com/gmail/about/">
                            <i className="bi-envelope-fill  text-white" />
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
                    <hr className="mt-3" />
                    <a className="navbar-brand" href="#">
                        <img src={require("../assets/img/logo3.jpg")} alt="logo" className="logo" />
                    </a>
                    <p className="text-white Copyright">Copyright © <span className="dev-is"> shaikh_md. </span> 2023</p>
                </div>
            </div>
        </footer >

    )
}

export default Footer