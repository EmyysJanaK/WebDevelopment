// main.js

// Function to copy code to clipboard
function copyCodeToClipboard(codeElement) {
    // Select the code inside the element
    const range = document.createRange();
    range.selectNodeContents(codeElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  
    // Copy the selected text to the clipboard
    document.execCommand('copy');
  
    // Remove the selection
    selection.removeAllRanges();
  }
  
  // Add event listeners to the copy buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const codeElement = button.previousElementSibling;
      copyCodeToClipboard(codeElement);
      button.innerText = 'Copied!';
      setTimeout(() => {
        button.innerText = 'Copy';
      }, 1500); // Reset the button text after 1.5 seconds
    });
  });
  