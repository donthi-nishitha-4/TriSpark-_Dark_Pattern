function showTooltip(targetElement, text) {
    const tooltip = document.createElement("div");
    tooltip.className = "dp-tooltip";
    tooltip.innerText = text;
  
    document.body.appendChild(tooltip);
  
    const rect = targetElement.getBoundingClientRect();
    tooltip.style.top = rect.top - 60 + "px";
    tooltip.style.left = rect.left + "px";
  
    // Auto remove after 5 seconds
    setTimeout(() => {
      tooltip.remove();
    }, 5000);
  }
  
  // Example
  // showTooltip(document.querySelector("button"), "This button may be misleading.");
  