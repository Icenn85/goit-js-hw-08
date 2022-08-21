import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const FEEDBACK_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();

    const emailInput = form.elements.email.value;
    const messageInput = form.elements.message.value;
    if (emailInput && messageInput !== '') {
      console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));
      localStorage.removeItem(FEEDBACK_KEY);
      evt.currentTarget.reset();
    } 
}


function onTextareaInput(evt) {
  let savedMessage = localStorage.getItem(FEEDBACK_KEY);
  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
  } else {
    savedMessage = {};
  }
    savedMessage[evt.target.name] = evt.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(savedMessage)); 
}

savedTextarea();
function savedTextarea() {
    let savedMessage = localStorage.getItem(FEEDBACK_KEY);

    if (savedMessage) {
      savedMessage = JSON.parse(savedMessage);
      Object.entries(savedMessage).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
}


    