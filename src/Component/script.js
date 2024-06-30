let circularProgress = document.querySelector("circular-progress"),
            progressValue = document.querySelector("progress-value");

            let progressStarValue = 0,
            progressEndValue =90,
            speed = 100;

let progress = setInterval(()=>{
    progressStarValue++;

    progressValue.textContent = `${progressStarValue}%`

    if(progressStarValue == progressEndValue){
        clearInterval(progress);
    }

},speed);