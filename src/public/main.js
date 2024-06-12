document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('bg-white');
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('bg-white');
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('py-2');
        }
    });
});

const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toggle');

if(localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', (e)=> {
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode () {
    html.classList.add("dark");
    localStorage.setItem("mode", "dark");
};

function lightMode () {
    html.classList.remove("dark");
    localStorage.setItem("mode", "light");
};

window.addEventListener('load', () => {
    document.getElementById('loadingScreen').style.display = 'none';
});