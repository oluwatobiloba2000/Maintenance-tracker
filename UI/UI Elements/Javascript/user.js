const sideNav = document.querySelector('.side_nav');
const form = document.getElementById('pop_up_form');
const openForm = document.getElementById('new_request');
const closeForm = document.getElementById('close');
const new_request = document.getElementById('new_request');


document.querySelector('.nav-bar').addEventListener('click', () => {
    sideNav.style.width = "60%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
});

document.querySelector('.fa-times').addEventListener('click', () => {
    sideNav.style.width = "0";
    document.body.style.backgroundColor = "#EBF2FA"
});

openForm.addEventListener('click', () => {
    form.style.display = 'block';
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
});
closeForm.addEventListener('click', () => {
    form.style.display = 'none';
    document.body.style.backgroundColor = "#EBF2FA";
})
//Showing the username on the bar
const displayUsernameSide = document.getElementById('side_username_display')
const displayUsernameTop = document.getElementById('top_username_display')
// let username = prompt('what is your username ?');
// displayUsernameTop.innerHTML = `<i class="far fa-user"> ${username} <i class="fas fa-check-circle"></i> `;
// displayUsernameSide.innerHTML = `<i class="far fa-user"> ${username} <i class="fas fa-check-circle"></i> `;



const submitForm = document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    //getting the inputs form the user
    let title = document.getElementById("title").value;
    let postCategory = document.querySelector('[name=category]').value ;
    let postDescription = document.getElementById("description").value;
    let date = new Date();
    if (title.trim() === '' || postDescription.trim()=== '') {
        alert("Error")
    } else {
        // making a request
        const requests = document.querySelector(".hr");
        newDiv = document.createElement("div");
        newDiv.innerHTML = `<p style="margin :0 ;
        padding : 1%;
        background: rgba(5, 102, 141, 0.342);
        ">${title}</p>
        <p style="float : right; background-color: #A5BE00; padding: 0.4%;">${date}</p>
        <br>
        <p>&nbsp;<i class="fas fa-tools"></i> ${postCategory}</p>
        <p style="padding : 3px;border : 1px solid green">${postDescription}</p>
        <p style="margin-right: 3px;
        text-align: right;">pending</p>`
        newDiv.classList.add("requests");
        requests.insertAdjacentElement('beforebegin', newDiv);

        // cleared the user inputs
        document.getElementById("form").reset();

        form.style.display = 'none';
        document.body.style.backgroundColor = "#EBF2FA";
    }
});