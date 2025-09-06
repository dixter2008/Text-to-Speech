document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const outputBox = document.getElementById('output');
    if (text.trim() !== "") {
        outputBox.value = text; // Show the text in the output box
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-gb';
        speechSynthesis.speak(utterance);
    } else {
        outputBox.value = "Please enter some text.";
    }
});

 document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navList = document.querySelector('.nav-list');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navList.classList.toggle('active');
    });
});
