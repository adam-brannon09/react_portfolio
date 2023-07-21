import React from "react";

function Contact() {


    return (

        <form className="container content tiles">
            <div className ='col-5 mx-auto'>
                <div class="mb-3 ">
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control border border-dark" id="" aria-describedby="name"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" class="form-control border border-dark" id=""></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control border border-dark" id="" rows="10"></textarea>
                </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
            </div>
        </form>

    )
}

export default Contact;