document.addEventListener('DOMContentLoaded', () => { 
    const addInput = (parent) => {
        const tmpInput = document.querySelector('template#tmp-input');
        const fragment = tmpInput.content.cloneNode(true); // ไม่สามารถดึงจาก doc-frag ได้จึงต้องโคลนจากบรรทัดก่อนหน้า
        
        fragment.querySelector('input[type="number"]').addEventListener('change', () => {
            const inputs = parent.querySelectorAll('input[type="number"]'); //querySelectorAll จะ return nodelist ซึ่งใน nodelist มี foreach function อยู่

            let total = 0;
            inputs.forEach((elem) => total += elem.valueAsNumber); // sum of result
            document.querySelector('output.cmp-result').value = total; // sent to output
        });

        parent.append(fragment);

        parent.querySelectorAll('.cpm-input-container').forEach((inputsContainer, i) => {
            inputsContainer.querySelector('.cmp-input-no').textcontent = i + 1;
        })

    };

    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const cmdAddInput = document.querySelector('.cmd-add-input');
    cmdAddInput.addEventListener('click', () => {
        addInput(inputsContainer);
    });

    addInput(inputsContainer); //block แรกที่ถูก input เป็น defult
});