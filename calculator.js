function insert(num){
    document.form.textView.value = document.form.textView.value+num;
}
function ac(){
    document.form.textView.value = "";
}
function ce(){
    var x = document.form.textView.value; 
    document.form.textView.value = x.substring(0,x.length-1)
}
function equal(){
    var x = document.form.textView.value;
    if(x == ""){
        alert("Mulai Perhitungan ?");
    }

    if(x){
    document.form.textView.value = eval(x);
    }
}