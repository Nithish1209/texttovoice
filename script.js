// Function to initiate text-to-speech
function speakText() {
  const text = document.getElementById("text-input").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

// Event listener for the speak button
document.getElementById("speak-button").addEventListener("click", speakText);
