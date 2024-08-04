document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');

    title.textContent = 'Hello, I am MVS Pragnya Bala';
    subtitle.textContent = 'A passionate learner and tech enthusiast';

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    scrollToTopBtn.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    
    const dynamicText = document.getElementById('dynamic-text');

    // Dynamic Text Effect
    const textOptions = [
        'I am a Web Developer',
        'I am a Passionate Learner',
        'I am a Tech Enthusiast'
    ];

    let currentIndex = 0;
    const typingSpeed = 100; // Speed of typing effect in milliseconds
    const deletingSpeed = 50; // Speed of deleting effect in milliseconds
    const displayTime = 2000; // Time to display each full sentence

    function typeText(text) {
        return new Promise((resolve) => {
            let i = 0;
            dynamicText.textContent = '';
            dynamicText.style.width = '0';
            const typingInterval = setInterval(() => {
                dynamicText.textContent += text.charAt(i);
                dynamicText.style.width = `${dynamicText.textContent.length}ch`; // Update width to fit text
                i++;
                if (i > text.length) {
                    clearInterval(typingInterval);
                    setTimeout(resolve, displayTime);
                }
            }, typingSpeed);
        });
    }

    function deleteText() {
        return new Promise((resolve) => {
            let i = dynamicText.textContent.length;
            const deletingInterval = setInterval(() => {
                dynamicText.textContent = dynamicText.textContent.slice(0, i - 1);
                dynamicText.style.width = `${dynamicText.textContent.length}ch`; // Update width to fit text
                i--;
                if (i < 0) {
                    clearInterval(deletingInterval);
                    resolve();
                }
            }, deletingSpeed);
        });
    }

    async function startTextAnimation() {
        while (true) {
            await typeText(textOptions[currentIndex]);
            await deleteText();
            currentIndex = (currentIndex + 1) % textOptions.length;
        }
    }

    startTextAnimation();
});
// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
