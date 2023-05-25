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
    let getValHours = hours.value;
    let getValMinutes = minutes.value;
    let getValSeconds = seconds.value;
   
    if(seconds.value <= 0) {
        seconds.value = 59;
        minutes.value = 1;
    }
    

    
    
}

