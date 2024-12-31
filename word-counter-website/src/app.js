function countWords() {
    const textInput = document.getElementById('text-input').value;
    const wordCount = textInput.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('word-count').textContent = `Word Count: ${wordCount}`;
}

function clearInput() {
    document.getElementById('text-input').value = '';
    document.getElementById('word-count').textContent = 'Word Count: 0';
}

document.getElementById('count-button').addEventListener('click', countWords);
document.getElementById('clear-button').addEventListener('click', clearInput);