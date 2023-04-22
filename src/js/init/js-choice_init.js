import Choices from "choices.js"

if(document.querySelector('.js-choice-type')){
    const element = document.querySelector('.js-choice-type');
    const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText: '',
    });
}
if(document.querySelector('.js-choice-sort')){
    const element = document.querySelector('.js-choice-sort');
    const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText: '',
    });
}
if(document.querySelector('.js-choice-type-mobile')){
    const element = document.querySelector('.js-choice-type-mobile');
    const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText: '',
    });
}
if(document.querySelector('.js-choice-sort-mobile')){
    const element = document.querySelector('.js-choice-sort-mobile');
    const choices = new Choices(element,{
    searchEnabled: false,
    itemSelectText: '',
    });
}