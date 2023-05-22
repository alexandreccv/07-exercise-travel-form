const submitBtn = document.querySelector('#submit-btn');

function handleSubmit(event) {
  event.preventDefault();
}

window.onload = function () {
  submitBtn.addEventListener('click', handleSubmit);
};

function clearFields() {
  submitBtn.disabled = true;
}

window.onload = function () {
  // ...
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
};
