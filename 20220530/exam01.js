function increase(){
    var number1 = document.getElementById("number");
    number = number1.innerHTML;
    number = parseInt(number) +1;
    number1.innerHTML = number;
}
function decrease(){
    var number1 = document.getElementById("number");
    number = number1.innerHTML;
    number = parseInt(number) -1;
    number1.innerHTML = number;
}
