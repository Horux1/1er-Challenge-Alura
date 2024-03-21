function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var key = parseInt(document.getElementById("key").value);
    var encryptedText = "";
    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode((charCode - 65 + key) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode((charCode - 97 + key) % 26 + 97);
        } else {
            encryptedText += inputText.charAt(i);
        }
    }
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    var key = parseInt(document.getElementById("key").value);
    var decryptedText = "";
    for (var i = 0; i < inputText.length; i++) {
        var charCode = inputText.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode((charCode - 65 - key + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode((charCode - 97 - key + 26) % 26 + 97);
        } else {
            decryptedText += inputText.charAt(i);
        }
    }
    document.getElementById("outputText").value = decryptedText;
}

function copyText() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}

// menu

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Dom

let nav = document.querySelector("#home")
nav.innerHTML = ("Home")

let nav2 = document.querySelector("#about")
nav2.innerHTML = ("About") 