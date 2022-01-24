let amountElement = document.querySelector(".js-form__amount");
let currencyElement = document.querySelector(".js-form__inputPLN");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");

let selectElement = document.querySelector(".js-form__currencySelect");
let plnElement = document.querySelector("js-form__PLN");
let KRWElement = document.querySelector("js-form__KRW");




formElement.addEventListener("input", () => {
    switch (selectElement.value) {
        case "PLN":
            currencyElement = document.querySelector(".js-form__inputPLN");
            document.getElementById("KRW").style.display = "none";
            document.getElementById("PLN").style.display = "block";
            currencyText = "KRW";
            break;
        case "KRW":
            currencyElement = document.querySelector(".js-form__inputKRW");
            document.getElementById("PLN").style.display = "none";
            document.getElementById("KRW").style.display = "block";
            currencyText = "PLN";
            break;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;

    let result = amount * currency;

    resultElement.innerText = result.toFixed(4) + " " + currencyText;
});

formElement.addEventListener("reset", () => {
    resultElement.innerText = "N/A";
});