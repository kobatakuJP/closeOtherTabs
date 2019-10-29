// ボタンクリックでタブ削除
chrome.browserAction.onClicked.addListener(() => closeOtherTabs());

// コマンドリスナ
chrome.commands.onCommand.addListener(function(command) {
  switch (command) {
    case "close_other_tabs":
      closeOtherTabs();
      break;
    default:
      console.error(`Unknown command: ${command}`);
  }
});

/** 他のタブを閉じる */
function closeOtherTabs() {
  chrome.tabs.query({currentWindow: true}, function(tab) {
    chrome.tabs.remove(tab.filter(v => !v.active).map(v => v.id));
  });
}
