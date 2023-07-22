import React from "react";
import {  } from "react-icons/fa"

function Nav({ updatePage }) {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                
                    <a class="navbar-brand font-weight-bold " href="#" onClick={() => updatePage('About')}><h2>{'{AGB}'}</h2></a>
                    
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <h4><a class="nav-link active" aria-current="page" href="#" onClick={() => updatePage('About')}>About</a></h4>
                        </li>
                        <li class="nav-item">
                           <h4> <a class="nav-link active" href="#" onClick={() => updatePage('Project')}>Portfolio</a>  </h4>
                        </li>
                        <li class="nav-item">
                           <h4> <a class="nav-link active" href="#" onClick={() => updatePage('Contact')}>Contact</a></h4>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;

