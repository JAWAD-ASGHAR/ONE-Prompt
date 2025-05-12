document.getElementById('mobile-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('show');
    document.getElementById('overlay').classList.add('active');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('show');
    this.classList.remove('active');
});


const chatInput = document.querySelector('.chat-input');
const sendButton = document.querySelector('.send-button');
const chatMessages = document.getElementById('chat-messages');
const initialContent = document.getElementById('initial-content');
const messages = [];

function addMessage(content, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    messageDiv.textContent = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    messages.push({ content, isUser });
}

function handleSendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        initialContent.style.display = 'none';
        chatMessages.style.display = 'flex';
        
        addMessage(message);
        
        chatInput.value = '';
        
        setTimeout(() => {
            addMessage("I'm a demo response. This is a placeholder message to show how the chat interface works. In a real implementation, this would be replaced with actual AI responses.", false);
        }, 1000);
    }
}

sendButton.addEventListener('click', handleSendMessage);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
    }
});