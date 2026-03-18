function play () {
  const utterance = new SpeechSynthesisUtterance("test");
  speechSynthesis.speak(utterance);
}