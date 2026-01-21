chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Forward scan request to content script
    if (message.action === "scan_page" && message.tabId) {
      chrome.tabs.sendMessage(message.tabId, { action: "extract_text" });
    }
  
    // Forward analysis result to popup
    if (message.action === "send_result") {
      chrome.runtime.sendMessage({
        action: "update_popup",
        result: message.result,
      });
    }
  });
  