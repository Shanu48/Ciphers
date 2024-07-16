function decrypt(ciphertext, key) {
    key = key.toLowerCase().replace(/[^a-z]/g, "");
    if (key.length <= 1) {
        alert("Keyword should be at least 2 characters long");
        return "";
    }

    let plaintext = "";
    let keyIndex = 0;
    for (let i = 0; i < ciphertext.length; i++) {
        const cipherChar = ciphertext.charCodeAt(i);
        if (cipherChar >= 97 && cipherChar <= 122) {
            const keyChar = key.charCodeAt(keyIndex % key.length) - 97;
            const plainChar = ((cipherChar - 97 - keyChar + 26) % 26) + 97;
            plaintext += String.fromCharCode(plainChar);
            keyIndex++;
        } else if (cipherChar >= 65 && cipherChar <= 90) {
            const keyChar = key.charCodeAt(keyIndex % key.length) - 97;
            const plainChar = ((cipherChar - 65 - keyChar + 26) % 26) + 65;
            plaintext += String.fromCharCode(plainChar);
            keyIndex++;
        } else {
            plaintext += String.fromCharCode(cipherChar);
        }
    }
    return plaintext;
}

function decipherMessage() {
    const cipherText = document.getElementById('cipherText').value;
    const key = document.getElementById('key').value;
    const keepSpaces = document.getElementById('keepSpaces').checked;
    
    let formattedCipherText = cipherText.toLowerCase();
    if (!keepSpaces) {
        formattedCipherText = formattedCipherText.replace(/[^a-z]/g, "");
    }

    const decryptedText = decrypt(formattedCipherText, key);
    document.getElementById('decipheredText').value = decryptedText;
}