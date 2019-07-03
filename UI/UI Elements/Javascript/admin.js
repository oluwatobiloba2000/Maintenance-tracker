const sideNav = document.querySelector('.side_nav');


document.querySelector('.nav-bar').addEventListener('click', () => {
    sideNav.style.width = "80%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
});

document.querySelector('.fa-times').addEventListener('click', () => {
    sideNav.style.width = "0";
    document.body.style.backgroundColor = "#EBF2FA"
});