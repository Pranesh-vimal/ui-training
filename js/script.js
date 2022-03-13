var hexcode = document.getElementById("hexcode");
var answerContainer = document.getElementById("answer-container");
var result = document.getElementById("result");
var resultColor = document.getElementById("result-color");
var resultText = document.getElementById("result-text");
var code = "";
var codeArray = [];
var clicked = 1;

const generateCode = () => {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()}`;
};

window.onload = function () {
    code = generateCode();
    if (code.length !== 7) {
        location.reload();
    }
    codeArray = hexCodeArray(code);
    hexcode.value = code;
    setBackgroundColor(codeArray);
};

const hexCodeArray = (code, size = 6) => {
    let hexCodeArray = [code];
    for (let i = 0; i < size; i++) {
        let hexCode = generateCode();
        if (!hexCodeArray.includes(hexCode) && hexCode.length === 7) {
            hexCodeArray.push(hexCode);
        } else {
            i--;
        }
    }
    hexCodeArray = shuffleArray(hexCodeArray);
    return hexCodeArray;
};

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }

    return array;
};

const setBackgroundColor = (array) => {
    for (var i = 1; i < array.length; i++) {
        document.getElementById(`color-${i}`).style.backgroundColor = array[i];
    }
};

const checkColor = (selected) => {
    let RGB = getRGB(selected.style.backgroundColor);
    let hex = convertRGBtoHex(RGB.red, RGB.green, RGB.blue);
    if (hex === code) {
        resultColor.style.backgroundColor = code;
        resultText.innerHTML = "You Win!";
        clicked = codeArray.length;
        answerContainer.style.display = "none";
        result.style.display = "flex";
    } else {
        selected.style.backgroundColor = "white";
        selected.style.border = "none";
        clicked++;
        if (clicked === codeArray.length - 1) {
            resultColor.style.backgroundColor = code;
            resultText.innerHTML = "Game Over - You Lose!";
            answerContainer.style.display = "none";
            result.style.display = "flex";
        }
    }
};

const colorToHex = (color) => {
    var hexadecimal = Number(color).toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
};

const convertRGBtoHex = (red, green, blue) => {
    return `#${colorToHex(red)}${colorToHex(green)}${colorToHex(
        blue
    )}`.toUpperCase();
};

const getRGB = (str) => {
    var match = str.match(
        /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
    );
    return match
        ? {
              red: match[1],
              green: match[2],
              blue: match[3],
          }
        : {};
};
