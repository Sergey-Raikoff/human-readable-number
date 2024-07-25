module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    const teen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    const numberOfdigits = String(number).length;
    const numberToStr = number.toString();
    let output = "";

    if (number > 999) return;
    if (numberOfdigits === 1) return units[number];
    if (numberOfdigits === 2) {
        if (number < 20) return teen[number];
        if (number > 19) {
            number % 10 === 0
                ? (output = tens[number])
                : (output = `${tens[Math.floor(number / 10) * 10]} ${
                      units[number % 10]
                  }`);
        }
    }
    if (numberOfdigits === 3) {
        if (number % 100 === 0) {
            output = `${units[Math.floor(number / 100)]} hundred`;
        }
        if (number % 100 !== 0) {
            if (numberToStr[1] === "0") {
                output = `${units[Math.floor(number / 100)]} hundred ${
                    units[number % 10]
                }`;
            }
            if (numberToStr[1] === "1") {
                output = `${units[Math.floor(number / 100)]} hundred ${
                    teen[numberToStr.slice(1)]
                }`;
            }
            if (numberToStr[1] > 1) {
                numberToStr.slice(1) % 10 === 0
                    ? (output = `${units[Math.floor(number / 100)]} hundred ${
                          tens[numberToStr.slice(1)]
                      }`)
                    : (output = `${units[Math.floor(number / 100)]} hundred ${
                          tens[Math.floor(numberToStr.slice(1) / 10) * 10]
                      } ${units[Math.floor(numberToStr.slice(1) % 10)]}`);
            }
        }
    }
    return output;
};
