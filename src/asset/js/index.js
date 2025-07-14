//  dark mode
 let toggle = document.getElementById("dark-toggle");
        toggle.addEventListener('click',() => {
            document.documentElement.classList.toggle('dark')
            document.documentElement.classList.contains('dark')? toggle.innerText = "☀️" : toggle.innerText = "🌙"
        })