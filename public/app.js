function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    if (messageInput.value.trim() !== '') {
        const messageDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = '<span>' + messageInput.value + '</span>';
        dateDiv.innerHTML = '<span>' + new Date() + '</span>';
        dateDiv.className = 'user-message-date';
        messageDiv.appendChild(dateDiv);
        chatMessages.appendChild(messageDiv);

        // Clear the input after sending the message
        messageInput.value = '';

        // Simulate receiving a response after a short delay
        setTimeout(function() {
            const responseDiv = document.createElement('div');
            const dateDiv = document.createElement('div');
            responseDiv.className = 'message other-message';
            responseDiv.innerHTML = '<span>Hi! This is a sample response.</span>';
            dateDiv.innerHTML = '<span>' + new Date() + '</span>';
            dateDiv.className = 'other-message-date';
            responseDiv.appendChild(dateDiv);
            chatMessages.appendChild(responseDiv);

            // Scroll to the bottom of the chat messages
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
    }
}