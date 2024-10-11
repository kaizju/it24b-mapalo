class LogTracker {
    constructor(totallogsElement, logButton, logContainer) {
        this.totallogs = 0;
        this.totallogsElement = totallogsElement;
        this.logButton = logButton;
        this.logContainer = logContainer;
        this.logButton.addEventListener('click', this.logButtonClick.bind(this));
      }
  
}
  function updateDisplay() {
    const textbox = document.getElementById('textbox');
    const displayText = document.getElementById('displayText');
    displayText.textContent = textbox.value;
  }

  function showAlert() {
    const textbox = document.getElementById('textbox');
    alert("Hello " + textbox.value);
  }