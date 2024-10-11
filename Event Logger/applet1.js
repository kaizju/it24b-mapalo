class LogTracker {
    constructor(totallogsElement, logButton, logContainer) {
        this.totallogs = 0;
        this.totallogsElement = totallogsElement;
        this.logButton = logButton;
        this.logContainer = logContainer;
        this.logButton.addEventListener('click', this.logButtonClick.bind(this));
      }
      logButtonClick() {
        const currentDate = new Date();
        const logMessage = `Logged on ${currentDate.toLocaleString()}`;
        this.logContainer.innerHTML += `<p>${logMessage}</p>`;
        this.totallogs++;
        this.totallogsElement.textContent = `Total logs: ${this.totallogs}`;
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