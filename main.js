document.addEventListener('DOMContentLoaded', () => {
const playButton = document.getElementById('playBtn');
playButton.addEventListener('click', function() {
      
      const youtubeURL = "https://youtu.be/vAoOJLpYKJ0?si=VpFiQKmFVuugJpjG";
      
      window.open(youtubeURL, "_blank");
    });


const sections = document.querySelectorAll('.lyrics');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85; // 85% down the viewport

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load
});