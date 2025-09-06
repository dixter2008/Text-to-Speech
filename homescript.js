 document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navList = document.querySelector('.nav-list');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navList.classList.toggle('active');
            });
        });

document.getElementById('summarize-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const outputBox = document.getElementById('output');
    
    if (text.trim() === "") {
        outputBox.textContent = "Please enter some text.";
    } else {
        outputBox.textContent = text;
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('output').value;
    if (text !== "") {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-gb';
        speechSynthesis.speak(utterance);
    }   
});
