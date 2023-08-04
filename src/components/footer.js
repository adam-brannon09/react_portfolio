import React from "react";

function Footer() {


    return (
        
        <footer className="bg-dark text-center text-white fixed-bottom">
            {/* <!-- Grid container --> */}
            <div className="container p-4 ">
                <section className="mb-1">
                    <a className="text-white p-5 footerLink" href="https://github.com/adam-brannon09"> 
            <i className="devicon-github-original"></i>
          GitHub</a>
                    <a className="text-white p-5 footerLink" href="https://www.linkedin.com/in/adam-brannon2022/"> 
            <i className="devicon-linkedin-plain"></i>
           LinkedIn</a>
                    <a className="text-white p-5 footerLink" href="https://www.facebook.com/adam.brannon.9"> 
            <i className="devicon-facebook-plain"></i>
           Facebook</a>
                </section>
            </div>
        </footer>

    )
}

export default Footer;

