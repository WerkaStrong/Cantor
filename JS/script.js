{
    let currencyElement = document.querySelector(".js-form__input");

    const formElement = document.querySelector(".js-form");
    const selectElement = document.querySelector(".js-form__currencySelect");
    const resultElement = document.querySelector(".js-form__result");

    const changeLabels = () => {
        formElement.addEventListener("input", () => {
            switch (selectElement.value) {
                case "PLN":
                    document.getElementById("currencyName").innerText = "P";
                    currencyText = "KRW";
                    currencyElement.value = "299.34";
                    break;
                case "KRW":
                    currencyElement = document.querySelector(".js-form__input");
                    document.getElementById("currencyName").innerText = "K";
                    currencyText = "PLN";
                    currencyElement.value = "0.0033";
                    break;
            }
        });
    }

    const onFormSubmit = () => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-form__amount");
            const amount = +amountElement.value;
            const currency = currencyElement.value;
            const result = amount * currency;

            resultElement.innerText = result.toFixed(4) + " " + currencyText;
        });
    }

    const resetResult = () => {
        formElement.addEventListener("reset", () => {
            resultElement.innerText = "N/A";
        });
    }

    const init = () => {
        onFormSubmit();
        resetResult();
        changeLabels();
    }

    init();
}