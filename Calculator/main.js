function Delate(){
    document.getElementById("mainInput").value="";
}

function myButton(newVal){
    document.getElementById("mainInput").value +=newVal;
    //console.log(a);
}

function Ans(){
    var result = document.getElementById("mainInput").value;
    var evalResult = eval(result);
    document.getElementById("mainInput").value = evalResult; 

}