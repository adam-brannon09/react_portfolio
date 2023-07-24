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
                    <div class="mb-3 ">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control border border-dark " required></input>
                        <div className="invalid-feedback">Name cannot be left blank</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email Address</label>
                        <input type="email" class="form-control border border-dark" required></input>
                        <div className="invalid-feedback">Email cannot be left blank</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control border border-dark" rows="10" required ></textarea>
                        <div className="invalid-feedback">Message cannot be left blank</div>
                    </div>
                    <button type="submit" class="btn btn-dark" action="mailto:adam.brannon09@icloud.com">Submit</button>
                </div>
            </form>

        )
}

export default Contact;