const houres = document.querySelector('.houres');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');

const startButton = document.querySelector('.start__button');
const stopButton = document.querySelector('.stop__button');
const pauseButton = document.querySelector('.pause__button');
const resultButton = document.querySelector('.result__button');

// Start button
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})


let hour = 00,
    minut = 00,
    second = 00,
    millisecond = 00,
    interval,
    counter = 0


// Start
function startTimer() {

    // Milliseconds
    millisecond++;
    if(millisecond < 10){
        milliseconds.innerText = '0' + millisecond
    };
    if(millisecond >= 10){
        milliseconds.innerText = millisecond
    }
    if(millisecond >99){
        second++
        seconds.innerText = "0" + second
        millisecond = 0
        milliseconds.innerText = '0' + millisecond
    }

    // Seconds
    if(second <10){
        seconds.innerText = "0" + second
    }
    if(second >= 10){
        seconds.innerText =  second
    }
    if(second >59){
        minut++
        minutes.innerText = "0" + minut
        second = 0
        seconds.innerText = "0" + second   
    }

    // Minutes
    if(minut <10){
        minutes.innerText = "0" + minut
    }
    if(minut >= 10){
        minut.innerText =  minut
    }
    if(minut >59){
        hour++
        houres.innerText = "0" + hour
        minut = 0
        minutes.innerText = "0" + minut  
    }


}

// Pause
pauseButton.addEventListener('click', ()=>{
    clearInterval(interval)
});

// Stop
stopButton.addEventListener('click', ()=>{
    clearInterval(interval)
    clearFields()
});

function clearFields() {
    hour = 00
    minut = 00
    second = 00
    millisecond = 00
    houres.textContent = "00"
    minutes.textContent = "00"
    seconds.textContent = "00"
    milliseconds.textContent = "00"
}
// Result
resultButton.addEventListener('click', ()=>{
    clearInterval(interval)
    counter++
    const result = document.querySelector('.result')
    const elem = document.createElement('div')

    if(millisecond <10){
        millisecond = "0" + millisecond;
    }
    if(second <10){
        second = "0" + second;
    }
    if(minut <10){
        minut = "0" + minut;
    }
    if(hour <10){
        hour = "0" + hour;
    }
    elem.innerText = `Result ${counter}: ${hour}:${minut}:${second}:${millisecond}`
    result.append(elem)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    
    
    
});
