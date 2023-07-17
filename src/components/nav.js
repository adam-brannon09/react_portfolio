import React from "react";

function Nav({updatePage}) {


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#" onClick={()=>updatePage('About')}>About</a>
                        <a class="nav-link active" href="#" onClick={()=>updatePage('Project')}>Portfolio</a>
                        <a class="nav-link active" href="#" onClick={()=>updatePage('Contact')}>Contact</a>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;