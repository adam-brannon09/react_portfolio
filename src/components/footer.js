import React from "react";

function Footer() {


    return (
        
        <footer class="bg-dark text-center text-white fixed-bottom">
            {/* <!-- Grid container --> */}
            <div class="container p-4 ">
                <section class="mb-1">
                    <a class="text-white p-5 footerLink" href="https://github.com/adam-brannon09"> 
            <i class="devicon-github-original"></i>
          GitHub</a>
                    <a class="text-white p-5 footerLink" href="https://www.linkedin.com/in/adam-brannon2022/"> 
            <i class="devicon-linkedin-plain"></i>
           LinkedIn</a>
                    <a class="text-white p-5 footerLink" href="https://www.facebook.com/adam.brannon.9"> 
            <i class="devicon-facebook-plain"></i>
           Facebook</a>
                </section>
            </div>
        </footer>

    )
}

export default Footer;

