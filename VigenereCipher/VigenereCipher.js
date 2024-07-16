function handleEncrypt() {
    const msg = document.getElementById('plainText').value;
    const key = document.getElementById('key').value;
    const keepSpaces = document.getElementById('keepSpaces').checked;

    if (key.length === 0) {
        alert("Please enter a key.");
        return;
    }

    let processedMsg = msg;
    if (!keepSpaces) {
        processedMsg = processedMsg.replace(/\s+/g, '').replace(/[^\w]/g, '');
    }

    const cipheredText = encryptMessage(processedMsg, key);
    document.getElementById('cipheredText').value = cipheredText;
}

function encryptMessage(msg, key) {
    let cipher = "";
    key = key.toUpperCase();
    msg = msg.toUpperCase();

    for (let i = 0, j = 0; i < msg.length; i++) {
        const letter = msg[i];
        if (letter.match(/[A-Z]/)) {
            const msgCode = letter.charCodeAt(0) - 65;
            const keyCode = key[j % key.length].charCodeAt(0) - 65;
            cipher += String.fromCharCode((msgCode + keyCode) % 26 + 65);
            j++;
        } else {
            cipher += letter;
        }
    }

    return cipher;
}
