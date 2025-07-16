// dark mode
let toggle = document.getElementById("dark-toggle");
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = toggle.querySelector('ion-icon');
    if (document.documentElement.classList.contains('dark')) {
        icon.setAttribute('name', 'sunny');
    } else {
        icon.setAttribute('name', 'moon');
    }
});