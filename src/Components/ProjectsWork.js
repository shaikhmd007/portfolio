import React from 'react'

const ProjectsWork = () => {
    return (
        < section id="projects" className="projects-section py-5 px-4" >
            <div className="container">
                <div className="projects-content">
                    <h1 className="text-center projects-heading">Projects &amp; Work <i className="bi-code-slash" /></h1>
                    <div className="row skills-list flex justify-content-center gap-md-2 py-4">
                        {/* project1 */}
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card shadow-lg ">
                                <img src="//source.unsplash.com/800x300?tech" className="card-img-top" alt="..." />
                                <div className="card-body ">
                                    <strong className="card-title">🔘Find_Gits</strong><img src="https://raw.githubusercontent.com/shaikhmd007/Images-And-Svg-s-Resources/main/Social/github.svg" alt="shaikhmd#4950" height={20} width={30} />
                                    <hr className="mt-3 text-success" />
                                    <p className="card-text">
                                        🔹 It is a React app to provide search functionality to GitHub users by their username and show their
                                        Github details or
                                        Repositories. <br />
                                        🔹I have created this project to understand the real time API calls and render the details in the
                                        cool
                                        UI
                                        of the page . <br />
                                        ⚙️Tech stack used : React js , HTML,CSS &amp; JavaScript .
                                    </p>
                                    <a href="https://find-gits.netlify.app/" className="btn btn-outline-light align-self-baseline " alt="project" target="_blank" rel="noreferrer">
                                        <i className="bi-arrows-angle-expand" /></a>
                                    <a href="https://github.com/shaikhmd007/Find_Gits" target="_blank" className="btn  btn-outline-light align-self-baseline " rel="noreferrer">
                                        <i className="bi-code-slash" /></a>
                                </div>
                            </div>
                        </div>
                        {/* project2 */}
                        <div className="col-lg-4 mb-4">
                            <div className="card shadow-lg">
                                <img src="//source.unsplash.com/400x150?tech" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">🔘Movie-Fi-🎞️</h5>
                                    <hr className="mt-3 text-success" />
                                    <p className="card-text">
                                        🔹 It is a WebApp project of OMDB API for RESTful web service to obtain movie information, all content
                                        and images on the
                                        site . <br />
                                        🔹 Concepts Covered: fetch &amp; Manage API Calls, LocalStorage,React-Routers, State Management &amp; Hooks
                                        ⚙️Tech stack used: ReactJS, HTML5, CSS3, Mui , OMDB, Hosted on Netlify. <br />
                                        etc.
                                    </p>
                                    <a href="https://movie-fi-app.netlify.app/" target="_blank" className="btn  btn-outline-light align-self-baseline" rel="noreferrer">
                                        <i className="bi-arrows-angle-expand" /></a>
                                    <a href="https://github.com/shaikhmd007/movie-fi-app" target="_blank" className="btn  btn-outline-light align-self-baseline " rel="noreferrer"> <i className="bi-code-slash" /></a>
                                </div>
                            </div>
                        </div>
                        {/* project3 */}
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="card shadow-lg">
                                <img src="//source.unsplash.com/400x150?notebook" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ">🔘Daily_To_Do-App 📝</h5>
                                    <hr className="mt-3 text-success" />
                                    <p className="card-text">
                                        🔹 Description: To-DO-App is a list of tasks you need to-do , mark and complete the things that you
                                        want . <br />
                                        🔹 Features : Can set up tasks that need to be performed daily with this APP By Check , Add Or Delete
                                        From To-Do-List . <br />
                                        ⚙️Tech Stack : HTML,CSS, JavaScript.
                                    </p>
                                    <a href="https://shaikhmd007.github.io/ADD-TO-DO/" target="_blank" className="btn  btn-outline-light align-self-baseline" rel="noreferrer">
                                        <i className="bi-arrows-angle-expand" /></a>
                                    <a href="https://github.com/shaikhmd007/ADD-TO-DO" target="_blank" className="btn  btn-outline-light align-self-baseline " rel="noreferrer"> <i className="bi-code-slash" /></a>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-lg">
              <img src="//source.unsplash.com/400x150?web" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Booking Management System</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" class="btn  btn-outline-dark align-self-baseline">
                  <i class="bi-arrows-angle-expand"></i></a>
                <a href="#" class="btn btn-dark  btn-outline-light align-self-baseline "> <i
                    class="bi-code-slash"></i></a>
                  </div>
                </div>
              </div> */}
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ProjectsWork