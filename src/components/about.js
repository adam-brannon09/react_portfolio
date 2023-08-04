import React from "react";



function About() {


    return (
        <div className="container tiles">
            <section className="row about-container">
                <aside className="col-4">
                    <img src="./assets/suit3.jpeg" className="img-thumbnail rounded-circle shadow-lg" alt="placeholder"></img>
                </aside>
                <article className="col">
                    <code className="code"><p>Hi, my name is</p>
                        <h1>  &lt;Adam Brannon&gt;.</h1>
                        <h2>I build things for the web.</h2>
                    </code>
                    <p className="intro">
                        I recently graduated from a comprehensive Full Stack Web Developer bootcamp where I acquired a strong foundation in web development. My skills include HTML, CSS, JavaScript, API integration, SQL, Sequelize, Node.js, Express, MVC architecture, MongoDB, Mongoose, Progressive Web Applications, React, and the MERN stack.

                        Passionate about crafting beautiful user interfaces and building robust web applications, I'm eager to contribute my creativity and skills to the dynamic world of web development. On this website, you'll find a showcase of my projects and code samples that demonstrate my abilities. Let's collaborate on exciting projects and create something extraordinary together!

                        Thank you for visiting!
                    </p>


                </article>
            </section>
            <section className="row">
                <span className="aboutIcons">
                    <i className="devicon-html5-plain-wordmark   "></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                    <i className="devicon-bootstrap-plain-wordmark"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                    <i className="devicon-npm-original-wordmark"></i>
                    <i className="devicon-express-original-wordmark"></i>
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="devicon-redux-original"></i>
                    <i className="devicon-mysql-plain-wordmark"></i>
                    <i className="devicon-sequelize-plain"></i>
                    <i className="devicon-mongodb-plain-wordmark"></i>
                    <i className="devicon-graphql-plain-wordmark"></i>
                    <i className="devicon-vscode-plain"></i>
                    <i className="devicon-handlebars-plain-wordmark colored"></i>
                    <i className="devicon-git-plain"></i>

                </span>
            </section>
        </div>
    )
}

export default About;