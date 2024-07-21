let second = 0;
let minute = 0;
let hour = 0;

setInterval(function() {
    second++;
    if(second == 60) {
        second = 0;
        minute++;
        if(minute == 60) {
            minute = 0;
            hour++;
        }
    }
    console.log(second, minute,hour);
},1000)