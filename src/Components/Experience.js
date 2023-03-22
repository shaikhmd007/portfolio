import React from 'react'

const Experience = () => {
    return (
        <section id="experience" className="experience-section min-vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="content d-flex flex-column justify-content-center align-items-center gap-2">
                    <h1 className="mb-3 text-white">Experiences 📑</h1>
                    <div className="card p-4 rounded-2">
                        <h2>
                            🔹Apprenticeship @ Geekster
                            <hr className="mt-3" />
                        </h2>
                        <p>
                            I am not fully fresher . I have 1+ years of experience as apprenticeship with Geekster.
                            where I have work on front-end Technologies and various frameworks like Reactjs ,Bootstrap,Redux , MUI,
                            AntD, tailwindCSS HTML5,CSS3 And JavaScript etc.
                            I have built some technical projects .and almost completed the
                            Front-End Development. <br />
                            Internship in Full Stack Web Development <br />
                            Technical Stack:
                            Front-End: React Js, HTML, CSS, JavaScript <br />
                            Back-End: Node Js, Express JAVA, C# C,C++,UNITY <br />
                            Problem Solving: Data Structures and Algorithms <br />
                            Project Developed: Chat Application: Movie-Fi using OMDB, GitFind for GitHub Users , DailyToDo App , Memory
                            Game, TicTacToe Game , GuessIt-Wordle etc.
                        </p>
                    </div>
                    {/*  CAN ADD EXTRA CARDS FOR MORE EXPERIENECS
    <div class="card p-4 rounded-2">
      <h2>
      Web Dev Intern @ Softtech
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur architecto minus consectetur provident
      eaque possimus neque nostrum? Modi, est sed.
    </p>
  </div>
 */}
                </div>
            </div>
        </section>

    )
}

export default Experience