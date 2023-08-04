import React from "react";
import resume from "../assets/resume.pdf";


function Nav({ updatePage, currentPage }) {



    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white fixed-top">
            <div class="container-fluid">

                <a class="navbar-brand font-weight-bold" href="#"><h2>{'{adamBrannon}'}</h2></a>


                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class={currentPage === "About" ? "nav-link active" : "nav-link"} aria-current="page" id="about" href="#" onClick={() => updatePage('About')}><h4>About</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class={currentPage === "Project" ? "nav-link active" : "nav-link"} id="project" href="#" onClick={() => updatePage('Project')}><h4>Projects</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class={currentPage === "Contact" ? "nav-link active" : "nav-link"} id="contact" href="#" onClick={() => updatePage('Contact')}><h4>Contact</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="resume" href={resume} ><h4>Resume</h4></a>
                        </li>

                    </ul>
                </div>
            </div>

        </nav>


    )
}

export default Nav;

