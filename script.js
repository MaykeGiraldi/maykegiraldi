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


const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: window.innerWidth <= 768 ? 0.05 : 0.15,
  rootMargin: window.innerWidth <= 768 ? "0px 0px -30px 0px" : "0px 0px -50px 0px"
});

reveals.forEach(el => observer.observe(el));


