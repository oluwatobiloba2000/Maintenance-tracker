document.getElementById('sign_in_button').addEventListener('click', checkValidation);
const incorrect = document.getElementById('incorrect');

// const correctUsername = "oluwatobiloba";
// const correctPassword = "1";
// const correctAdmin = 'admin';
// correctAdminPass = '1';

function checkValidation(e) {
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const validatingUsername = document.getElementById('validating_username');
  const validatingPassword = document.getElementById('validating_password');
  e.preventDefault();


  if (username.value.trim() === '') {
    validatingUsername.style.visibility = "visible";
    username.style.borderColor = "red";
  } else {
    validatingUsername.style.visibility = "hidden";
    username.style.borderColor = "#05668D";
  }

  if (password.value.trim() === '') {
    validatingPassword.style.visibility = 'visible';
    password.style.borderColor = "red";
  } else {
    validatingPassword.style.visibility = 'hidden'
    password.style.borderColor = "#05668D";
  };

  // if (username.value.trim() === correctUsername && password.value.trim() === correctPassword) {
  //   //  alert("login success");
  //   // window.location.assign("http://127.0.0.1:5500/UI/UI%20Elements/HTML/user.html");
  // } else if (username.value.trim() === '' || password.value.trim() === '') {
  //   incorrect.style.visibility = 'hidden';
  // } else {
  //   incorrect.style.visibility = 'visible'
  //   if (username.value.trim() === correctAdmin && password.value.trim() === correctAdminPass) {

  //     //  alert("login success");
  //     incorrect.style.visibility = 'hidden';
  //     // window.location.assign("http://127.0.0.1:5500/UI/HTML/admin/admin.html");
  //   } else if (username.value.trim() === '' || password.value.trim() === '') {
  //     incorrect.style.visibility = 'hidden';
  //   } else {
  //     incorrect.style.visibility = 'visible'
  //   }
  }

  //  removes warning when the user inputs data

  username.addEventListener('input', () => {
    validatingUsername.style.visibility = "hidden";
    username.style.borderColor = "#05668D";
    incorrect.style.visibility = "hidden"
  });

  password.addEventListener('input', () => {
    validatingPassword.style.visibility = 'hidden';
    password.style.borderColor = "#05668D";
    incorrect.style.visibility = "hidden"
  });



// };

// //SHOWING OR HIDING THE PASSWORD
const show_password = document.getElementById("show_password");
show_password.addEventListener('click', () => {
  const passwordValue = document.getElementById('password');
  // checking if the input type is password
  if (passwordValue.type === "password") {
    // if it is password , change it to text
    passwordValue.type = "text";
    // change the text content of the show_password to "HIDE"
    show_password.innerHTML = `<i class="fas fa-eye-slash"></i>`;
  } else {
    // else change it back to password
    passwordValue.type = "password";
    // change the text content of the show_password to SHOW
    show_password.innerHTML = `<i class="fas fa-eye"></i>`;
  }
});
//DISPLAY DATE ON THE HOME PAGE


const displayDate = document.getElementById("display_date");
// function date(){
//    let d = new Date();
//    // let hours = d.getHours();
//    // let minute = d.getUTCMinutes();
//    // let day = d.getDay();
//    // let sec = d.getUTCSeconds();
//    // let month = d.getMonth();
//    // let year = d.getFullYear();
//    // displayDate.innerHTML = `<p>Runtime : ${hours} hour(s) ${minute} mins ${sec} sec ago</p>`
//    displayDate.innerHTML = d;
// }

function date() {
  let today = new Date();
  displayDate.innerHTML = `<h2>WELCOME &nbsp; <i class="far fa-calendar-alt"></i> ${today.getDate()} | ${today.getMonth()+1} | ${today.getFullYear()}</h2>`;

}
setInterval(date, 1000);