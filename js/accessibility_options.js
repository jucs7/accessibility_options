// Toggle high contrast mode
function toggleHighContrast() {
  const htmlElement = document.documentElement;

  if(htmlElement.classList.contains('high-contrast')){
    htmlElement.classList.remove('high-contrast'); // Disable
  }
  else {
    htmlElement.classList.add('high-contrast'); // Enable
  }
}

// Increase font size in rem
function increaseFontSize() {
  const htmlElement = document.documentElement;
  const currentFontSize = parseFloat(getComputedStyle(htmlElement).fontSize) / 16; // Convert to rem
  const newFontSize = currentFontSize + 0.125; // Increase in 0.125 rem (~2px)
  htmlElement.style.fontSize = newFontSize + 'rem';
}

// Decrease font size in rem
function decreaseFontSize() {
  const htmlElement = document.documentElement;
  const currentFontSize = parseFloat(getComputedStyle(htmlElement).fontSize) / 16; // Convert to rem
  if (currentFontSize > 0.75) { // Limit min size
    const newFontSize = currentFontSize - 0.125; // Decrease in 0.125 rem (~2px)
    htmlElement.style.fontSize = newFontSize + 'rem';
  }
}

// Listeners
document.getElementById('toggle-high-contrast').addEventListener('click', toggleHighContrast);
document.getElementById('increase-font-size').addEventListener('click', increaseFontSize);
document.getElementById('decrease-font-size').addEventListener('click', decreaseFontSize);