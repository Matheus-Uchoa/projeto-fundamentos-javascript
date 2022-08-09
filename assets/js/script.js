var currentNumberWrapper =  document.getElementById('currentNumber');

var currentNumber = 0;



function increment(){
  currentNumber = currentNumber +1;
  currentNumberWrapper.innerHTML = currentNumber;
 if(currentNumber>=0){
  currentNumberWrapper.style.color= '';
 }
 /* TESTE PARA O CONTADOR PARAR EM DETERMINADO NÚMERO
 if(currentNumber >=10){
  document.getElementById("add").disabled = true;*/
 } 
 


function decrement(){
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if(currentNumber <0){
    currentNumberWrapper.style.color = 'rgba(160, 30, 30)';
  }
}





