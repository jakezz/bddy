document.getElementById('sendButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    // TODO: Add code here to send userInput to the AI and get a response
    var aiResponse = "This is a placeholder response from the AI.";
    document.getElementById('messages').innerHTML += "<p>User: " + userInput + "</p><p>AI: " + aiResponse + "</p>";
    document.getElementById('userInput').value = "";
});
