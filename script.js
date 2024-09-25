document.addEventListener('mousemove', (e) => {
    const content = document.querySelector('.content');

    const x = (e.pageX - window.innerWidth / 2) / 20;
    const y = (e.pageY - window.innerHeight / 2) / 20;

    content.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotateY(${x / 2}deg) rotateX(${y / 2}deg)`;
});
