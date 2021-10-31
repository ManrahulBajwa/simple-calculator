var v1 ;
var v2 ;


function add(){
    v1 = Number(document.myform.input1.value);
    v2 = Number(document.myform.input2.value);
    document.myform.result.value = v1 + v2;
}

function sub(){
    v1 = Number(document.myform.input1.value);
    v2 = Number(document.myform.input2.value);
    document.myform.result.value = v1 - v2;
}

function mult(){
    v1 = Number(document.myform.input1.value);
    v2 = Number(document.myform.input2.value);
    document.myform.result.value = v1 * v2;
}

function divi(){
    v1 = Number(document.myform.input1.value);
    v2 = Number(document.myform.input2.value);
    document.myform.result.value = v1 / v2;
}