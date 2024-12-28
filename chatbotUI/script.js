document.addEventListener('DOMContentLoaded', function() {
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const clearChatButton = document.getElementById('clear-chat');

    sendButton.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            addMessageToChat('User', message);
            messageInput.value = '';
            // Simulate a bot response
            setTimeout(() => addMessageToChat('Bot', 'This is a simulated response.'), 1000);
        }
    });

    clearChatButton.addEventListener('click', function() {
        chatWindow.innerHTML = '';
    });

    function addMessageToChat(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${sender}: ${message}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});