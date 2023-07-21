import React from "react";
import {FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"

function Footer() {


    return (
        
        <footer class="bg-dark text-center text-white fixed-bottom">
            {/* <!-- Grid container --> */}
            <div class="container p-4 ">
                <section class="mb-1">
                    <a class="text-white p-5" href="https://github.com/adam-brannon09"><FaGithub />  GitHub</a>
                    <a class="text-white p-5" href="https://www.linkedin.com/in/adam-brannon2022/"><FaLinkedin />  LinkedIn</a>
                    <a class="text-white p-5" href="https://www.facebook.com/adam.brannon.9"><FaFacebook/>  Facebook</a>
                </section>
            </div>
        </footer>

    )
}

export default Footer;

