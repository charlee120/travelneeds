function burger_navbar() {
    var burger = document.getElementById('navbar_elements_burger_div');
    burger.classList.toggle('active');
}

function burger_navbar_close() {
    var burger = document.getElementById('navbar_elements_burger_div');
    burger.classList.remove('active');
}