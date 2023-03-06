import React, { useState } from 'react'

const AboutMe = () => {
    const [load, setLoad] = useState(false);
    return (
        <section id="about" className="about-me-section">
            <div className="container">
                <div className="about-me-content">
                    <div className="card p-4 rounded-2 Card-blog">
                        <h2>
                            🪪 More About Me
                            <hr className="mt-3" />
                        </h2>
                        <p style={{ display: 'block' }}>
                            A boy who is from Karnataka but now residing at The city of Dreams Mumbai!! with his family.
                            He is in the field of software industry - & doing great as Web developer.He has completed his graduation🎓
                            in 💻 Bachelor Of Computer Application (BCA) and secured the lucky score 7+ CGPA. from Patkar Varde College
                            Goregaon, Mumbai. <br /> <br />

                            A guy who is Passionate for Computers softwares and to be a quick problem solver.
                            Now he is doing apprenticeship with Geekster joined as a Full Stack Dev.<br />

                            He know some programming language like React JS, Core Java, JavaScript, HTML CSS & good at Most popular
                            JavaScript FE-libarary 💙ReactJs. Or Again ⤵&nbsp;
                            <button className='read-more' onClick={() => setLoad(!load)}>  know More..</button>
                        </p>
                        {load ? (
                            <p className="para">
                                By using these techs built many technical projects Like - E-commerce web, MovieFi, GitFind, DailyToDos,Peronal PortFolio,YouTube Comments, GuessIt-Woriddles
                                TIC-TAC-TOE Game, And Memory Games many more...
                                And He always tries to become a good frontend developer
                                loves creating Websites .
                                the primary area of expertise are create technical projects, build like fully fledge web apps with the help of computer sofwares technologies and programming
                                languages.
                                love(‾◡◝) to <code /> - passionateto work and also enjoy spending time with nature 🌴 .
                                <br />
                                Finally In his free time basically He do works on his hobbies like learning more and gaining knowledge by
                                reading , explore the new things or experience the new stuffs.
                                So that's all about Myself...
                            </p>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe