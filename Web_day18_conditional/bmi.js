var weight = 60;
var height = 1.20;

var BMI = (weight/(height*height));
// console.log(BMI);

if(BMI < 18.5){
    console.log('you are underweight');
}

else if((BMI >=18.5) && (BMI <=24.9)){
    console.log('you are normal');
}

else if((BMI >=25) && (BMI <=29.9)){
    console.log('you are overweight');
}

else{
    console.log('you are obese.');
}