document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');
    const clearButton = document.getElementById('clearButton');
    const translateButton = document.getElementById('translateButton');
    const revertButton = document.getElementById('revertButton');
    const languageSelect = document.getElementById('languageSelect');
    const translatedText = document.getElementById('translatedText');
    let originalText = '';

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        const words = text.split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;
        charCount.textContent = text.length;
    });

    clearButton.addEventListener('click', () => {
        textInput.value = '';
        wordCount.textContent = 0;
        charCount.textContent = 0;
        translatedText.textContent = '';
    });

    translateButton.addEventListener('click', async () => {
        const text = textInput.value.trim();
        if (text.length > 0) {
            originalText = text;
            const language = languageSelect.value;
            const translated = await translateText(text, language);
            console.log('Translated Text:', translated);
            translatedText.textContent = translated;
        }
    });

    revertButton.addEventListener('click', () => {
        translatedText.textContent = originalText;
    });

    async function translateText(text, language) {
        const url = 'https://libretranslate.de/translate';
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                q: text,
                source: 'en',
                target: language,
                format: 'text'
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log('API Response:', data);
        return data.translatedText;
    }
});