<<<<<<< HEAD
const cursorLight = document.getElementById("cursor-light");

document.addEventListener("mousemove", (e) => {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
});

const botaoContato = document.getElementById('btn-contato')
const secaoContato = document.getElementById('contato')

botaoContato.addEventListener('click', function (event) {
    event.preventDefault()
    secaoContato.scrollIntoView({ behavior: 'smooth'})
})
=======
const cursorLight = document.getElementById("cursor-light");

document.addEventListener("mousemove", (e) => {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
});

>>>>>>> 7588e56e50bfa7b2f491a65f7cfa7e46fe43e1b6
