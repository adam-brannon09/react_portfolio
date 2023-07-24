import React from "react";


function Project() {



    return (
        <div class="container tiles portfolio-container ">

            <div class="row card-deck ">
               <code><h2 className="depAppHead">{'{Deployed Applications}'}</h2></code>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img class="card-img-top" src="./assets/passwordGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Password Generator</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/password_generator/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>

                    </div>
                </div>

                

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img class="card-img-top" src="./assets/workDayGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Work Day Scheduler</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/work_day_scheduler/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a ><img class="card-img-top" src="./assets/codeQuizGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Code Quiz</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/coding_quiz/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>

            </div>

            <br></br>

            <div class="row card-deck justify-content-between">
                {/* Weather Forecast */}
            <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img class="card-img-top" src="./assets/weatherGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Weather Forecast App</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/weather_forecast_app/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Moody */}
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a ><img class="card-img-top" src="./assets/moodyGif.gif" alt="Card image cap"></img></a> 
                    <div class="card-body">
                        <h5 class="card-title">Moody The 5 Minute Journal</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://tranquil-wildwood-45278.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Note Taker */}
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                <img class="card-img-top" src="./assets/noteTakerGif.gif" alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Note Taker</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://pure-plateau-06759-17795068f1d2.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a class="text-light project-link" href=""><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
            
            </div>

            {/* <div class="row card-deck ">
               <code><h2 className="depAppHead2">(Run Us In The CLI)</h2></code>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <img class="card-img-top" src="./assets/readmeGen.gif" alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">README.md Generator</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="project-link text-light" href="https://github.com/adam-brannon09/readme_generator"><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <img class="card-img-top" src="./assets/logoCreator.gif" alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Logo Creator</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="project-link text-light" href="https://github.com/adam-brannon09/svg-logo-generator"><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <img class="card-img-top" src="./assets/employeeDatabase.gif" alt="Card image cap"></img>
                    <div class="card-body">
                        <h5 class="card-title">Employee Database</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="project-link text-light " href="https://github.com/adam-brannon09/employee_tracker"><i class="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>

            </div> */}


            {/* End */}
        </div>


    )
}


export default Project;

