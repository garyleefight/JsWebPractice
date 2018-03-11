window.onload = function(){
//    displayDate();
    setInterval(displayDate,1000);
}


function displayDate(){
    var date = new Date();
    var numString = addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());
    var hour = document.getElementsByClassName('hour');
    var minute = document.getElementsByClassName('minute');
    var second = document.getElementsByClassName('second');
    for(i=0;i<numString.length;i++){
        if(i<2){
            hour[i].src = 'images/' + numString.charAt(i) + '.png';
        }else if(i<4){
            minute[i-2].src = 'images/' + numString.charAt(i) + '.png';
        }else{
            second[i-4].src = 'images/' + numString.charAt(i) + '.png';
        }
    }
}

function addZero(number){
    if(number < 10){
        return '0' + number;
    }else{
        return '' + number;
    }
}