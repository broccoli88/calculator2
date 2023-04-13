const input = document.querySelector(`.screen__input`);
const output = document.querySelector(`.screen__output`);
const numbericalButtons = document.querySelectorAll(`[data-number]`);
const operationalButtons = document.querySelectorAll(`[data-operation]`);
const delButton = document.querySelector(`[data-del]`);
const clearButton = document.querySelector(`[data-clear]`);
const decimalButton = document.querySelector(`[data-decimal]`);
const equalsButton = document.querySelector(`[data-equals]`);

window.addEventListener(`load`, () => {
    input.textContent = `0`;
});

function calculatorFunctionality() {
    // Adding numbers

    numbericalButtons.forEach((button) => {
        button.addEventListener(`click`, (e) => {
            let int = Number(e.target.dataset.number);

            if (input.textContent === `0`) {
                input.textContent = int;
            } else {
                input.textContent += int;
            }
        });
    });

    // Deleting last item

    delButton.addEventListener(`click`, () => {
        input.textContent = input.textContent.slice(0, -1);
        output.textContent = `0`;

        if (!input.textContent) {
            input.textContent = `0`;
        }
    });

    // Clearing screen

    clearButton.addEventListener(`click`, () => {
        output.textContent = `0`;
        input.textContent = `0`;
    });

    // Adding decimal

    decimalButton.addEventListener(`click`, () => {
        if (input.textContent.includes(`.`)) return;

        input.textContent += `.`;
    });

    // Adding operation

    operationalButtons.forEach((operation) => {
        operation.addEventListener(`click`, (e) => {
            const inputContent = input.textContent;
            if (
                inputContent.charAt(inputContent.length - 1) === `+` ||
                inputContent.charAt(inputContent.length - 1) === `-` ||
                inputContent.charAt(inputContent.length - 1) === `*` ||
                inputContent.charAt(inputContent.length - 1) === `/`
            )
                return;
            input.textContent += e.target.textContent;
        });
    });

    // Making calculation

    equalsButton.addEventListener(`click`, () => {
        output.textContent = eval(input.textContent);
    });
}

calculatorFunctionality();
