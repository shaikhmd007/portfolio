import React from 'react'

const CV_Resume = () => {
    return (

        < section id="resume-section" className="experience-section min-vh-10 d-flex justify-content-center align-items-center" >
            <div className="container">
                <div className="content d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-white" style={{ fontSize: '3vw', margin: '2rem' }}>DownLoad &amp; See My CV Resume🗒️
                    </h1>
                    <div className="card p-4 rounded-2">


                        {/* DownLoad Resume🗒️ Btn */}
                        <div className="save from-center">
                            <a target="_blank" href="https://docs.google.com/document/d/1op7HD2PK1LZS9WT_PmxI6cQ4ZiFv2Ww5/edit?usp=sharing&ouid=101685079108711183913&rtpof=true&sd=true" rel="noreferrer">
                                Res🪪ume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default CV_Resume