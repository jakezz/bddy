document.getElementById('runButton').addEventListener('click', function() {
    var codeInput = document.getElementById('codeInput').value;
    try {
        var codeOutput = eval(codeInput);
        document.getElementById('codeOutput').innerHTML = "<p>" + codeOutput + "</p>";
    } catch (error) {
        document.getElementById('codeOutput').innerHTML = "<p>Error: " + error + "</p>";
    }
    document.getElementById('codeInput').value = "";
});
