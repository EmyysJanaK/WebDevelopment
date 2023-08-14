document.addEventListener('DOMContentLoaded', function () {
    const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');

    popupTrigger.addEventListener('click', function () {
        popup.style.display = 'block'; // Show the pop-up
        setTimeout(function () {
            popup.style.display = 'none'; // Hide the pop-up after a certain time (optional)
        }, 3000); // Adjust the time (in milliseconds) as per your requirement
    });
    const copyButtons = document.querySelectorAll('.copy-btn'); 
    copyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const codeElement = button.previousElementSibling;
            const range = document.createRange();
            range.selectNodeContents(codeElement);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            
            // Copy the selected text to the clipboard
            document.execCommand('copy');
            console.log('Code copied to clipboard:', codeElement.innerText);
            
            // Remove the selection
            selection.removeAllRanges();
            
            // Change button text to 'Copied!'
            button.innerText = 'Copied!';
            setTimeout(() => {
                button.innerText = 'Copy';
            }, 1500); // Reset the button text after 1.5 seconds
        });
    });
});
huytth