const sideNav = document.querySelector('.side_nav');


document.querySelector('.fa-bars').addEventListener('click', () => {
    sideNav.style.width = "60%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)"
});

document.querySelector('.fa-times').addEventListener('click', () => {
    sideNav.style.width = "0";
    document.body.style.backgroundColor = "#EBF2FA"
});