document.getElementById("scanBtn").addEventListener("click", () => {
  document.getElementById("status").innerText = "Scanning...";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]) {
      document.getElementById("status").innerText = "No active tab";
      return;
    }

    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "SCAN_PAGE" },
      (response) => {
        if (chrome.runtime.lastError) {
          document.getElementById("status").innerText =
            "Content script not loaded on this page";
          return;
        }

        if (!response) {
          document.getElementById("status").innerText =
            "No response from page";
          return;
        }

        document.getElementById("status").innerText = "Scanned";
        document.getElementById("risk").innerText = response.risk;
        document.getElementById("category").innerText = response.category;
        document.getElementById("confidence").innerText = response.confidence;
        document.getElementById("explanation").innerText = response.explanation;
      }
    );
  });
});
