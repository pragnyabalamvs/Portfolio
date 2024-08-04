document.addEventListener('DOMContentLoaded', function () {
    // Set progress percentage for circular indicators for frameworks and libraries
    document.querySelectorAll('.frameworks .circle').forEach(function (circle) {
        let value = parseFloat(circle.getAttribute('data-value'));
        let color = circle.getAttribute('data-color');
        circle.style.setProperty('--percentage', value * 100);
        circle.style.setProperty('--color', color);
    });

    // Set initial width for progress bars for programming languages and DBMS
    document.querySelectorAll('.skill-percentage').forEach(function (bar) {
        let percentage = bar.parentElement.previousElementSibling.querySelector('.percentage').innerText;
        bar.style.width = percentage;
    });
});
