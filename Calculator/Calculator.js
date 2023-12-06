
const inputCalculation = document.querySelector('.js-input');
const buttons = document.querySelectorAll('button');
let specialCharacters = [ '*', '+', '-', '.','/','=']
let output = '';



const calculate = (btnValue)=>{
  if(btnValue === '=' && output !== ''){
    output = eval(output.replace('%','/100'));
  }else if(btnValue === 'AC'){
    output = '';
  }else{
    if(output ==='' && specialCharacters.includes(btnValue)){
      return;
     
    }
    output += btnValue;

  }
  inputCalculation.value = output;
}


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
     calculate(e.target.dataset.value);
  });

});

