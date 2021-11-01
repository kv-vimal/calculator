function add(){
    let firstvalue=document.querySelector("#firstvalue").value;
    let secondvalue=document.querySelector("#secondvalue").value;
    let ans = +firstvalue + +secondvalue;
    let output=document.querySelector("p")
    output.innerHTML=`the output is ${ans}`;

}
function mul(){
    let firstvalue=document.querySelector("#firstvalue").value;
    let secondvalue=document.querySelector("#secondvalue").value;
    let ans = +firstvalue * +secondvalue;
    let output=document.querySelector("p")
    output.innerHTML=`the output is ${ans}`;

}
function div(){
    let firstvalue=document.querySelector("#firstvalue").value;
    let secondvalue=document.querySelector("#secondvalue").value;
    let ans = +firstvalue / +secondvalue;
    let output=document.querySelector("p")
    output.innerHTML=`the output is ${ans}`;

}
function sub(){
    let firstvalue=document.querySelector("#firstvalue").value;
    let secondvalue=document.querySelector("#secondvalue").value;
    let ans = +firstvalue - +secondvalue;
    let output=document.querySelector("p")
    output.innerHTML=`the output is ${ans}`;

}