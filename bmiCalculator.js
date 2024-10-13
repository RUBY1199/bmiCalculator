function bmiCalculator(weight, hieght){
    var bmi=Math.round(weight/(Math.pow(hieght,2)));
    return bmi;
}
bmiCalculator(58,1.8);