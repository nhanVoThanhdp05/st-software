// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          

          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  // validation email
//   const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   };
  
//   const validate = () => {
//     const $result = $('#result');
//     const email = $('#email').val();
//     $result.text('');
  
//     if (validateEmail(email)) {
//       $result.text(email + ' is valid :)');
//       $result.css('color', 'green');
//     } else {
//       $result.text(email + ' is not valid :(');
//       $result.css('color', 'red');
//     }
//     return false;
//   }
  
//   $('#email').on('input', validate);
  
//   function validatePhoneNumber(input_str) {
//     var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

//     return re.test(input_str);
// }

// function validateForm(event) {
//     var phone = document.getElementById('myform_phone').value;
//     if (!validatePhoneNumber(phone)) {
//         document.getElementById('phone_error').classList.remove('hidden');
//     } else {
//         document.getElementById('phone_error').classList.add('hidden');
//         alert("validation success")
//     }
//     event.preventDefault();
// }

// document.getElementById('myform').addEventListener('submit', validateForm);