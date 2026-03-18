function playTheAudio () {
  const utterance = new SpeechSynthesisUtterance("test");
  speechSynthesis.speak(utterance);
}