import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const messageEl = document.querySelector('[name="message"]');

const KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

let formData = {
    email: '',
    message: '',
};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData));
}

function onPageInit() {
const savedData = JSON.parse(localStorage.getItem(KEY));
    
    if (savedData) {
        emailEl.value = savedData.email;
        messageEl.value = savedData.message;

        formData.email = savedData.email;
        formData.message = savedData.message;
    }
    
}
onPageInit();

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    e.currentTarget.reset();
    console.log(formData);

    formData.email = '';
    formData.message = '';
}
