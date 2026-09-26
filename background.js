// MiniTab background service worker (Manifest V3)
chrome.action.onClicked.addListener(async () => {
  const { minitabWindowId } = await chrome.storage.session.get("minitabWindowId");

  if (minitabWindowId) {
    chrome.windows.update(minitabWindowId, { focused: true }, () => {
      if (chrome.runtime.lastError) {
        chrome.storage.session.remove("minitabWindowId");
        openMiniTab();
      }
    });
  } else {
    openMiniTab();
  }
});

async function openMiniTab() {
  const width = 420;
  const height = 520;
  const margin = 20; // Distance from the top and right screen edges
  const top = margin;

  // Retrieve display information to find the current screen width
  const displays = await chrome.system.display.getInfo();
  const primaryDisplay = displays.find((d) => d.isPrimary) || displays[0];
  const screenWidth = primaryDisplay.workArea.width;

  // Position at top-right
  const left = Math.round(screenWidth - width - margin);

  chrome.windows.create(
    {
      url: chrome.runtime.getURL("search.html"),
      type: "popup",
      width: width,
      height: height,
      top: top,
      left: left,
      focused: true
    },
    async (win) => {
      await chrome.storage.session.set({ minitabWindowId: win.id });
    }
  );
}

chrome.windows.onRemoved.addListener(async (closedId) => {
  const { minitabWindowId } = await chrome.storage.session.get("minitabWindowId");
  if (closedId === minitabWindowId) {
    await chrome.storage.session.remove("minitabWindowId");
  }
});