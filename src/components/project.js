import React from "react";


function Project() {



    return (
        <div class="container tiles portfolio-container ">

            <div class="row card-deck ">
               <code><h2 className="depAppHead">{'{Deployed Applications}'}</h2></code>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a href="https://adam-brannon09.github.io/password_generator/"><img class="card-img-top" src="./assets/passwordGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Password Generator</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>

                

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a href="https://adam-brannon09.github.io/work_day_scheduler/"><img class="card-img-top" src="./assets/workDayGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Work Day Scheduler</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a href="https://adam-brannon09.github.io/coding_quiz/"><img class="card-img-top" src="./assets/codeQuizGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Code Quiz</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>

            </div>

            <br></br>

            <div class="row card-deck justify-content-between">
                
            <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a href="https://adam-brannon09.github.io/weather_forecast_app/"><img class="card-img-top" src="./assets/weatherGif.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Weather Forecast App</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a href="https://tranquil-wildwood-45278.herokuapp.com/ "><img class="card-img-top" src="./assets/moodyGif.gif" alt="Card image cap"></img></a> 
                    <div class="card-body">
                        <h5 class="card-title">Moody The 5 Minute Journal</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                <a href="https://pure-plateau-06759-17795068f1d2.herokuapp.com/"><img class="card-img-top" src="./assets/noteTakerGif.gif" alt="Card image cap"></img></a> 
                    <div class="card-body">
                        <h5 class="card-title">Note Taker</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                </div>
            
            </div>

            <div class="row card-deck ">
               <code><h2 className="depAppHead2">(Run Us In The CLI)</h2></code>
                
                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a href="https://github.com/adam-brannon09/readme_generator"><img class="card-img-top" src="./assets/readmeGen.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">README.md Generator</h5>
                        <p class="card-text">A node application that generates a quality README.md with prompt guided user input</p>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                    <a href="https://github.com/adam-brannon09/svg-logo-generator"><img class="card-img-top" src="./assets/logoCreator.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Logo Creator</h5>
                        <p class="card-text">A node application that uses prompts in the CLI to render a logo based on user input</p>
                    </div>
                </div>

                <div class="card col-4 bg-dark text-light rounded p-2 border border-white">
                   <a href="https://github.com/adam-brannon09/employee_tracker"><img class="card-img-top" src="./assets/employeeDatabase.gif" alt="Card image cap"></img></a>
                    <div class="card-body">
                        <h5 class="card-title">Employee Database</h5>
                        <p class="card-text">Utilizing a SQL Database to keep track of employees, their roles, and Departments</p>
                    </div>
                </div>

            </div>


            {/* End */}
        </div>


    )
}


export default Project;

