import {createInputSum} from './inputSum.js';

function generateSectionCotainer(parent){
    const sectionContainers = parent.querySelectorAll('.cmp-sections-container .cmp-section-container');
    sectionContainers.forEach((sectionContainer, i) => {
        sectionContainer.querySelector('.cmp-sec-no').textContent = i + 1;
        sectionContainer.querySelector('.cmd-remove-sec').disabled = false;
    });

    if(sectionContainers.length == 1) {
        parent.querySelector('.cmd-remove-sec').disabled = true;
    }
};

function addSection(parent){
    const tmpSection = document.querySelector('template#tmp-section');
    const fragment = tmpSection.content.cloneNode(true);

    createInputSum(fragment.querySelector('.cmp-section-container'));

    parent.append(fragment);

    generateSectionCotainer(parent);

}

export function createSectionInput(mainContainer) {
    const sectionContainer = mainContainer.querySelector('.cmp-sections-container'); //เรียกใช้กล่อง section
    
    mainContainer.addEventListener('click', (ev) => {
        const elem = ev.target;

        if(elem.matches('.cmd-add-section')) {
            addSection(sectionContainer);
        } else if(elem.matches('.cmd-remove-sec')) {
            const elem = ev.target;
            const inputSection = elem.closest('.cmp-section-container');

            inputSection.remove();

            generateSectionCotainer(mainContainer);
        }
    });

    addSection(sectionContainer); // กล่อง section แรกที่ปรากฎและไม่สามารถถูกลบจากเงื่อนไขด้านบน
}