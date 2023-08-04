import React from "react";


function Project() {



    return (
        <div className="container tiles portfolio-container ">

            <div className="row card-deck">
               <code><h2 className="depAppHead">{'{Deployed Applications}'}</h2></code>
                
                {/* JATE */}
                <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img className="card-img-top" src="./assets/jate-demo.gif" alt="Card image cap"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">J.A.T.E Just Another Text Editor</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://rocky-lake-08346-97f05045468c.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/adam-brannon09/PWA_Text_Editor"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Workday Scheduler */}
                <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img className="card-img-top" src="./assets/workDayGif.gif" alt="Card image cap"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Work Day Scheduler</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/work_day_scheduler/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/adam-brannon09/work_day_scheduler"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Google Books */}
                <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a ><img className="card-img-top" src="./assets/google_books.gif" alt="Card image cap"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Google Books</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://ancient-castle-83069-60b0fc05b9bd.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/adam-brannon09/google_books_api"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
            </div>

            <br></br>

            <div className="row card-deck justify-content-between">
                {/* Weather Forecast */}
            <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a ><img className="card-img-top" src="./assets/weatherGif.gif" alt="Card image cap"></img></a>
                    <div className="card-body">
                        <h5 className="card-title">Weather Forecast App</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://adam-brannon09.github.io/weather_forecast_app/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/adam-brannon09/weather_forecast_app"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Moody */}
                <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a ><img className="card-img-top" src="./assets/moodyGif.gif" alt="Card image cap"></img></a> 
                    <div className="card-body">
                        <h5 className="card-title">Moody The 5 Minute Journal</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://tranquil-wildwood-45278.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/Sabplpz/Moody"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
                {/* Note Taker */}
                <div className="card col-4 bg-dark text-light rounded p-2 border border-white">
                <img className="card-img-top" src="./assets/noteTakerGif.gif" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Note Taker</h5>
                        <br></br>
                        <button className="btn btn-lg btn-outline-light bg-dark text-light p-2 mx-2"><a className="text-light project-link" href="https://pure-plateau-06759-17795068f1d2.herokuapp.com/" >Deployed App</a></button>
                        <button className="btn btn-lg btn-outline-light bg-dark p-2 mx-2 "><a className="text-light project-link" href="https://github.com/adam-brannon09/note_taker"><i className="devicon-github-original"></i>To The Repo</a></button>
                    </div>
                </div>
            
            </div>


            {/* End */}
        </div>


    )
}


export default Project;

