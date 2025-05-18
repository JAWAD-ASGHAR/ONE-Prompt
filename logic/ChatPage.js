document.getElementById("mobile-toggle").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("show");
  document.getElementById("sidebar-overlay").classList.add("active");
});

document.getElementById("close-sidebar").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("sidebar-overlay").classList.remove("active");
});

document
  .getElementById("sidebar-overlay")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("show");
    document.getElementById("sidebar-overlay").classList.remove("active");
  });

document
  .getElementById("select-model-overlay")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("show");
    this.classList.remove("active");
  });

document
  .getElementById("model-selector")
  .addEventListener("click", function () {
    document.getElementById("models-popup").style.display = "block";
    document.getElementById("select-model-overlay").classList.add("active");
  });

document
  .getElementById("select-model-overlay")
  .addEventListener("click", function () {
    document.getElementById("select-model-overlay").classList.remove("active");
    document.getElementById("models-popup").style.display = "none";
  });

let isProcessing;

const chatInput = document.querySelector(".chat-input");
const sendButton = document.querySelector(".send-button");
const chatMessages = document.getElementById("chat-messages");
const initialContent = document.getElementById("initial-content");

function addMessage(content, isUser = true) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user" : "assistant"}`;
  messageDiv.textContent = content;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleSendMessage() {
  const message = chatInput.value.trim();
  if (message) {
    isProcessing = true;
    initialContent.style.display = "none";
    chatMessages.style.display = "flex";

    addMessage(message);

    chatInput.value = "";

    setTimeout(() => {
      addMessage(
        "I'm a demo response. This is a placeholder message to show how the chat interface works. In a real implementation, this would be replaced with actual AI responses.",
        false
      );
      isProcessing = false;
    }, 1000);
  }
}

sendButton.addEventListener("click", handleSendMessage);

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && !isProcessing) {
    e.preventDefault();
    handleSendMessage();
  }
});