let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.animate-in');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
        section.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const containers = document.querySelectorAll('.iframe-container');
    containers.forEach(container => {
        const containerTop = container.getBoundingClientRect().top;
        if (containerTop < window.innerHeight * 0.75) {
        container.classList.add('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.encyclopedia-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
        section.classList.add('active');   

        }
    });
});

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');

                }, (idx + 1) * 50)
                
            })
        },2000)

        setTimeout(()=>{
            intro.style.top = '-100vh'
        },2300)
    })
})