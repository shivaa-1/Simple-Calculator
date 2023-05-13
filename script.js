function addition(){
    let value1=document.getElementById("firstvalue").value;
    let value2=document.getElementById("secondvalue").value;

    let ans= parseInt(value1)+parseInt(value2);

    output.value=`Answer is ${ans}`;
}


function subtract(){
    let value1=document.getElementById("firstvalue").value;
    let value2=document.getElementById("secondvalue").value;

    let ans= parseInt(value1)-parseInt(value2);

    output.value=`Answer is ${ans}`;
}

function multiply(){
    let value1=document.getElementById("firstvalue").value;
    let value2=document.getElementById("secondvalue").value;

    let ans= parseInt(value1)*parseInt(value2);

    output.value=`Answer is ${ans}`;
}

function division(){
    let value1=document.getElementById("firstvalue").value;
    let value2=document.getElementById("secondvalue").value;

    let ans= parseInt(value1)/parseInt(value2);

    output.value=`Answer is ${ans}`;
}

function reset(){
    let value1=document.getElementById("firstvalue");
    let value2=document.getElementById("secondvalue");
    let output=document.getElementById("output");

    value1.value="";
    value2.value="";
    output.value="";

}
