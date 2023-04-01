let counterValue = 0;
const value = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickBtn = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const onClickBtnPlus = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickBtn);
incrementBtn.addEventListener('click', onClickBtnPlus);