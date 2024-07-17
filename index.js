//generate password functionality

function generatePassword() {
    const PasswordLenght = 8;
    const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < PasswordLenght; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);

        document.getElementById('password').value = password
        
    };
};

// reset password functionality

function Reset() {
    document.getElementById('password').value = null;
};

function generateSpecialCharacter() {
    const characterLenght = 8;
    const charSet = '!@#$%^&*><?/;:|}{)(0123456789'
    let password = '';

    for (let i = 0; i < characterLenght; i++) {
        const characterIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(characterIndex);

        document.getElementById('password').value = password
        
    };
};

function uppercase() {
    const upperLenght = 8;
    const upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = '';

    for (let i = 0; i < upperLenght; i++) {
        const upperIndex = Math.floor(Math.random() * upperSet.length);
        password += upperSet.charAt(upperIndex);

        document.getElementById('password').value = password
    };
};


function numbers() {
    const numbersLenght = 8;
    const numbersSet = '0123456789'
    let password = '';

    for (let i = 0; i < numbersLenght; i++) {
        const numbersIndex = Math.floor(Math.random() * numbersSet.length);
        password += numbersSet.charAt(numbersIndex);

        document.getElementById('password').value = password
    };
};


function lowercase() {
    const lowerLenght = 8;
    const lowerSet = 'abcdefghijklmnopqrstuvwxyz'
    let password = '';

    for (let i = 0; i < lowerLenght; i++) {
        const lowerIndex = Math.floor(Math.random() * lowerSet.length);
        password += lowerSet.charAt(lowerIndex);

        document.getElementById('password').value = password
    };
};