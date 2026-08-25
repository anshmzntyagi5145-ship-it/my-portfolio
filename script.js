function sayHello() {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = "Welcome to my profile";
  messageElement.classList.add("fade-in");
  setTimeout(() => {
    messageElement.classList.remove("fade-in");
  }, 600);
}
