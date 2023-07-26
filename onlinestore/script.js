document.addEventListener('DOMContentLoaded', function () {
    const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');

    popupTrigger.addEventListener('click', function () {
        popup.style.display = 'block'; // Show the pop-up
        setTimeout(function () {
            popup.style.display = 'none'; // Hide the pop-up after a certain time (optional)
        }, 3000); // Adjust the time (in milliseconds) as per your requirement
    });
});
huytth