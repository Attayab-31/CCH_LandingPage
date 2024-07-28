document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('getStartedBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    getStartedBtn.addEventListener('click', function() {
        alert('Thank you for your interest! We will contact you soon.');
    });

    learnMoreBtn.addEventListener('click', function() {
        alert('Learn more about our product features below!');
    });
});
