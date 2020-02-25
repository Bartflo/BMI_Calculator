function Count(){
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var result = 0;
    var changed = height/100;
    result = weight/Math.pow(changed,2);
    result = result.toFixed(2);
    if(weight>0 && height>0){
        document.getElementById('result').innerHTML = 'Twoje BMI wynosi = ' + result;
    }else{
        document.getElementById('result').innerHTML = 'Podaj prawidłowe dane!';
    }
}
