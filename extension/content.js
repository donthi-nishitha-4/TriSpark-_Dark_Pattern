console.log("Dark Pattern Guard content.js loaded");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action !== "SCAN_PAGE") return;

  const text = document.body?.innerText || "";

  fetch("http://127.0.0.1:5000/detect", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      sendResponse({
        risk: data.risk || "Low",
        category: data.category || "None",
        confidence: data.confidence || "0%",
        explanation: data.explanation || "No dark patterns detected"
      });
    })
    .catch(() => {
      sendResponse({
        risk: "Error",
        category: "Backend",
        confidence: "0%",
        explanation: "Failed to connect to backend"
      });
    });

  return true; // 🔴 REQUIRED
});
