function generateInputCotainer(parent){
    const inputContainers = parent.querySelectorAll(' .cmp-inputs-container .cmp-input-container');
    inputContainers.forEach((inputContainer, i) => {
        inputContainer.querySelector('.cmp-input-number').textContent = i + 1;
        inputContainer.querySelector('.cmd-remove-input').disabled = false;
    });

    if(inputContainers.length == 1) {
        parent.querySelector('.cmd-remove-input').disabled = true;
    }
};

function calculateSum (parent){
    const inputs = parent.querySelectorAll(' .cmp-inputs-container .cmp-input-container input[type="number"]');
    let total = 0;
    inputs.forEach((elem) => total += elem.valueAsNumber);
    parent.querySelector('output.cmp-result').value = total;
};

function addInput(parent){
    const tmpInput = document.querySelector('template#tmp-input');
    const fragment = tmpInput.content.cloneNode(true);

    parent.append(fragment);

    generateInputCotainer(parent);
};

//จำเป็นต้อง export มาด้วย
export function createInputSum(sectionContainer){
    const inputsContainer = sectionContainer.querySelector('.cmp-inputs-container');

    sectionContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if(elem.matches('.cmd-add-input')) {
            addInput(inputsContainer);
        } else if(elem.matches('.cmd-remove-input')) {
            const elem = ev.target;
            const inputContainer = elem.closest('.cmp-input-container');
            inputContainer.remove();
            generateInputCotainer(sectionContainer);
            calculateSum(sectionContainer);
        }
    });

    inputsContainer.addEventListener('change', (ev) => {
        const elem = ev.target;
        if(elem.matches('input[type="number"]')) {
            calculateSum(sectionContainer);
        }
    });
    addInput(inputsContainer);
};