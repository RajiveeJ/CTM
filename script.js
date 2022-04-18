function add(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)+parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML="Addition of numbers is : "+result;
}
function sub(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)-parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML="Subtraction of numbers is : "+result;
}
function mul(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)*parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML="Multiplication of numbers is : "+result;
}
function div(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("second").value;
    var result=parseInt(num1)/parseInt(num2);
    document.getElementsByClassName("output")[0].innerHTML="Division of numbers is : "+result;
}
