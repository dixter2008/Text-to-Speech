 document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navList = document.querySelector('.nav-list');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navList.classList.toggle('active');
            });
        });

document.getElementById('summarize-btn').addEventListener('click', () => {

    const text = document.getElementById('text-input').value.trim();
    const outputBox = document.getElementById('output');

    const offensiveWords = ["Putanginamo", "tangina mo", "Shet", "Motherfucker"];
    const lowertext = text.toLowerCase();
    
    if(text !== "") {
        if (offensiveWords.some(word => lowertext.includes(word))) {
            outputBox.textContent = "Offensive language detected. Please enter appropriate text.";
        } 
        else {
            outputBox.textContent = text;
        } 
      } else {
        outputBox.textContent = "Please enter some text to summarize.";
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
