
var friendScore = 25;


if(80<=friendScore){
    console.log('go for a lunch.');
}

else if((friendScore < 80) && (friendScore >= 60)){
    console.log('good luck next time');
}

else if((friendScore < 60) && (friendScore >= 40)){
    console.log('keep your friends message unseen');
}

else if((friendScore < 40)){
    console.log('block your friend');
}

else{
    console.log('go to home and sleep and act sad');
}