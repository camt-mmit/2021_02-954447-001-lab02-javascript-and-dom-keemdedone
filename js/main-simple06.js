import {createSectionInput} from './inputSection.js' ;

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.cmp-main-container');

    createSectionInput(mainContainer);
});