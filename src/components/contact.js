import React from "react";

function Contact() {

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()
    



        return (

            <form className="container content tiles needs-validation" >
                <div className='col-5 mx-auto'>
                    <div className="mb-3 ">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control border border-dark " required></input>
                        <div className="invalid-feedback">Name cannot be left blank</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email Address</label>
                        <input type="email" className="form-control border border-dark" required></input>
                        <div className="invalid-feedback">Email cannot be left blank</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control border border-dark" rows="10" required ></textarea>
                        <div className="invalid-feedback">Message cannot be left blank</div>
                    </div>
                    <button type="submit" className="btn btn-dark" action="mailto:adam.brannon09@icloud.com">Submit</button>
                </div>
            </form>

        )
}

export default Contact;