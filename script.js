try {
const utterance = new SpeechSynthesisUtterance("hello");
speechSynthesis.speak(utterance);
console.log("hi?");
} catch (err) {
 document.getElementById("test").innerText = err.toString();
}