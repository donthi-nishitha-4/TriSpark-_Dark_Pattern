function showOverlay(message) {
    const overlay = document.createElement("div");
    overlay.className = "dp-overlay";
  
    overlay.innerHTML = `
      ⚠ Dark Pattern Detected<br>
      <small>${message}</small>
    `;
  
    document.body.appendChild(overlay);
  
    // Auto hide after 6 seconds
    setTimeout(() => {
      overlay.remove();
    }, 6000);
  }
  
  // Example
  // showOverlay("This popup forces consent without choice.");
  