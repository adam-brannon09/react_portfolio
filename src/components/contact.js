import React from "react";

function Contact() {


    return (

        <form className="container content">
            <div className ='col-5 mx-auto'>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="name" class="form-control" id="" aria-describedby="name"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id=""></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="" rows="10"></textarea>
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

    )
}

export default Contact;