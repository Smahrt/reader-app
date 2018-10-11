/* Event Listeners */
const decreaseFontButton = document.getElementById("font-subtract");
const increaseFontButton = document.getElementById("font-add");
const resetFontButton = document.getElementById("reset-btn");
const toggleModeButton = document.getElementById("toggle-mode-btn");
const settingsToggleBtn = document.getElementById("app-controls-toggle");

decreaseFontButton.addEventListener("click", decreaseFont);
increaseFontButton.addEventListener("click", increaseFont);
resetFontButton.addEventListener("click", resetDefaultFontSize);
toggleModeButton.addEventListener("click", toggleNightMode);
settingsToggleBtn.addEventListener("click", toggleSettings);

/* Functions */
let defaultFontSize = 16;
let isNightMode = false;
let settingsVisble = false;
const articleViewer = document.getElementById("read-view");
const nightModeText = document.getElementById("night-mode-text");
const dayModeText = document.getElementById("day-mode-text");

function decreaseFont() {
    defaultFontSize--;
    articleViewer.style.fontSize = defaultFontSize + "px";
}

function increaseFont() {
    defaultFontSize++;
    articleViewer.style.fontSize = defaultFontSize + "px";
}

function resetDefaultFontSize() {
    defaultFontSize = 16;
    articleViewer.style.fontSize = defaultFontSize + "px";
}

function toggleNightMode() {
    if (isNightMode) { /* Switching to Day Mode */
        articleViewer.style.color = "#222";
        articleViewer.style.backgroundColor = "#fff";
        
        /* Adjusting the text on the night mode toggle button */
        dayModeText.style.display = "none";
        nightModeText.style.display = "inline";

        isNightMode = false; /* Turn off night mode */

    } else { /* Switching to Night Mode */
        articleViewer.style.color = "#fff";
        articleViewer.style.backgroundColor = "#222";

        /* Adjusting the text on the night mode toggle button */
        dayModeText.style.display = "inline";
        nightModeText.style.display = "none";

        isNightMode = true; /* Turn on night mode */
    }
}

function toggleSettings() {
    const settingsBar = document.getElementById("app-controls");

    settingsToggleBtn.style.transform = settingsVisble ? "unset" : "rotate(90deg)";

    settingsBar.style.display = (settingsVisble) ? "none" : "grid";
    settingsVisble = !settingsVisble;
}