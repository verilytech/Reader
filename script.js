speechSynthesis.onvoiceschanged = () => {
  const utterance = new SpeechSynthesisUtterance("test");
  speechSynthesis.speak(utterance);
};