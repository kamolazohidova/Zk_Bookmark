const modifiers = {
    tabItemActive: 'tabs__item--active',
    tabpanelsItemActive: 'tabpanels__item--active',
    accordionItem: 'accordion__item',
    accordionItmOpen: 'accordion__item--open'
};


const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll(modifiers.tabItemActive);
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove(modifiers.tabItemActive);
    });
}

function deactivateTabPanels () {
    elsTabsPanel.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove(modifiers.tabpanelsItemActive);
    });
}

function closeAccordionItems () {
    elsAccordionItem.forEach(function(elAccordionItem) {
        elAccordionItem.classList.remove(modifiers.accordionItmOpen)
    });
}

elsTabLink.forEach(function (elsTabLink) {
    elsTabLink.addEventListener('click', function(evt) {
        // Prevent page move 
        evt.preventDefault();

        // Remove active class form tabs__item elements 
        deactivateTabItems();
        
        // Add active class to current tabs__item 
        elsTabLink.parentElement.classList.add(modifiers.tabItemActive);

         // Remove active class form tabs__panel elements 
         deactivateTabPanels();

        //  Show active tab panel 
        // const elTargetPanel = document.querySelector(`#${elsTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elsTabLink.dataset.tabTarget);
        elTargetPanel.classList.add(modifiers.tabpanelsItemActive);
    });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        closeAccordionItems();

        elAccordionItemToggler.closest(modifiers.tabItemActive).classList.add(modifiers.accordionItmOpen)
    });
});