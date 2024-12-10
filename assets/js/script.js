let indexSlide = 0

function showSlide(index){
    const totalSlide = document.querySelectorAll('.carrossel img').Length;
    const carrossel = document.querySelector('.carrossel');

    carrossel.style.transform = `translateX(${index})`
}