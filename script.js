let days = document.querySelector('#day');
let hours = document.querySelector('#hour');
let minutes = document.querySelector('#minute');
let seconds = document.querySelector('#second');
let playBtn = document.querySelector('.play');
let stopBtn = document.querySelector('.stop');
let int = null;




    playBtn.addEventListener('click', () => {
        if(int != null) {
            clearInterval(int)
            console.log('inside if condition.')
        }

        int = setInterval(countingStart, 1000);
        
    })



function countingStart() {
    let getValDays = days.value;
    let getValHours = hours.value;
    let getValMinutes = minutes.value;
    let getValSeconds = seconds.value;
   

    if(seconds.value == 60) {
        seconds.value = 0;
        minutes.value--;
    }

    if(minutes.value == 60) {
        minutes.value = 0;
        hours.value--;
    }

    if(hours.value == 0) {
        hours.value = 0;
        days.value--;
    }

}

