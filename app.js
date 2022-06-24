const art = prompt('What arithmetic operation would you like to perform? (+, -, /, *)');

const num1 = parseInt(prompt('Enter a number'));

const num2 = parseInt(prompt('Enter another number'));


if (art == '' ){
    alert('Please enter an operator')
}else if (art == '+'){
    alert(`Your answer is ${num1 + num2} `)
}else if(art == '-'){
    alert(`Your answer is ${num1 - num2} `)
}else if(art == '/'){
    alert(`Your answer is ${num1 / num2} `)
}else if(art == '*'){
    alert(`Your answer is ${num1 * num2} `)
}
