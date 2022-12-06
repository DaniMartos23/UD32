function pulsaboton1(){
    document.getElementById("pantalla").value+="1";
}
function pulsaboton2(){
    document.getElementById("pantalla").value+="2";
}
function pulsaboton3(){
    document.getElementById("pantalla").value+="3";
}
function pulsaboton4(){
    document.getElementById("pantalla").value+="4";
}
function pulsaboton5(){
    document.getElementById("pantalla").value+="5";
}
function pulsaboton6(){
    document.getElementById("pantalla").value+="6";
}
function pulsaboton7(){
    document.getElementById("pantalla").value+="7";
}
function pulsaboton8(){
    document.getElementById("pantalla").value+="8";
}
function pulsaboton9(){
    document.getElementById("pantalla").value+="9";
}
function pulsaboton0(){
    document.getElementById("pantalla").value+="0";
}
function pulsaboton00(){
    document.getElementById("pantalla").value+="00";
}
function pulsabotoncoma(){
    document.getElementById("pantalla").value+=".";
}
function pulsabotonborrar(){
    document.getElementById("pantalla").value="";
}
function pulsabotondividir(){
    document.getElementById("pantalla").value+="/";
}
function pulsabotonmult(){
    document.getElementById("pantalla").value+="·";
}
function pulsabotonresta(){
    document.getElementById("pantalla").value+="-";
}
function pulsabotonsuma(){
    document.getElementById("pantalla").value+="+";
}
function pulsabotonresultado(){
    calculaResultado(document.getElementById("pantalla").value);
    
}

