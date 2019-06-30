// document.getElementById('sign_up_button').addEventListener('submit' , checkValidation);

// function checkValidation(e){
//     e.preventDefault();
//     //these are the inputs
//     const firstname = document.getElementById('firstname');
//     const lastname = document.getElementById('lastname');
//     const username = document.getElementById('username');
//     const password = document.getElementById('password');
//     //these are the inputs
//     const validatingFirstname = document.querySelector('.firstname_error');
//     const validatingLastname = document.querySelector('.Lastname_error');
//     const validatingUsername = document.querySelector('.username_error');
//     const validatingPassword = document.querySelector('.password_error');

//      if(firstname.value.trim() === ''){
//       validatingFirstname.style.visibility = "visible";
//       firstname.style.borderColor = "red";
//     }
//     else {
//         validatingFirstname.style.visibility = "hidden";
//         firstname.style.borderColor = "#05668D";
//     }

//     if(lastname.value.trim() === ''){
//       validatingLastname.style.visibility = 'visible';
//       lastname.style.borderColor = "red";
//     }
//     else{
//         validatingLastname.style.visibility = 'hidden'
//         lastname.style.borderColor = "#05668D";
//     };
//     //validating username
//     if(username.value.trim() === ''){
//         validatingUsername.textContent = "Username cannot be empty";
//         validatingUsername.style.visibility = 'visible';
//         username.style.borderColor = 'red';
//       }else {
//           validatingUsername.style.visibility = 'hidden';
//           password.style.borderColor = '#05668D';

//       if(username.value.trim().length  <= 2){
//         validatingUsername.textContent = "Username must be more than 2 characters";
//         validatingUsername.style.visibility = 'visible';
//         username.style.borderColor = 'red';
//       }else{
//         validatingUsername.style.visibility = 'hidden';
//         username.style.borderColor = '#05668D';
//       }
//   }
//     //validating password input
//     if(password.value.trim() === ''){
//       validatingPassword.textContent = "password cannot be empty";
//       validatingPassword.style.visibility = 'visible';
//       password.style.borderColor = 'red';
//     }else {
//         validatingPassword.style.visibility = 'hidden';
//         password.style.borderColor = '#05668D';

//     if(password.value.trim().length  <= 5){
//       validatingPassword.textContent = "password must be more than 5 characters";
//       validatingPassword.style.visibility = 'visible';
//       password.style.borderColor = 'red';
//     }else{
//       validatingPassword.style.visibility = 'hidden';
//       password.style.borderColor = '#05668D';
//     }
// }

//     //  removes warning when the user inputs data

//     firstname.addEventListener('input' , ()=>{
//      validatingFirstname.style.visibility = "hidden";
//       firstname.style.borderColor = "#05668D";
//       });

//       lastname.addEventListener('input' , ()=>{
//         validatingLastname.style.visibility = "hidden";
//          lastname.style.borderColor = "#05668D";
//          });

//          username.addEventListener('input' , ()=>{
//             validatingUsername.style.visibility = 'hidden';
//              username.style.borderColor = "#05668D";});

//     password.addEventListener('input' , ()=>{
//      validatingPassword.style.visibility = 'hidden';
//       password.style.borderColor = "#05668D";});

// };