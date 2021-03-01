const buttonsClose = document.querySelectorAll('.btn_close');
buttonsClose.forEach(element => element.addEventListener('click', function(event){
    const currentButton = event.target;
    const nextElement =  currentButton.nextElementSibling;
    if (nextElement.classList.contains('container')) {
        nextElement.classList.toggle('hidden');
    }
    
}));

// ------------------------- GLOBAL BUTTON SHOW/HIDE ALL CLICK START
const btnGlobal = document.querySelector('.level[data-level="0"] h2');
let wasButtonClicked = false;
btnGlobal.addEventListener('click', function() {
    if(wasButtonClicked !==  true) {
        document.querySelectorAll('.level').forEach(element => {
            if (element.dataset.level !== "0") {
                element.classList.remove('hidden');
            }
        });
       
        wasButtonClicked = true;
    } else {
        document.querySelectorAll('.level').forEach(element => {
            if (element.dataset.level !== "0") {
                element.classList.add('hidden');
            }
        });
        wasButtonClicked = false;
    }
});

// --------- SHOW N LEVEL FUNCTION
function showNLevel(levelToShow) {
    const levelsArray = document.querySelectorAll('.level');
    const btnCloseArray = document.querySelectorAll('.btn_close');
    levelsArray.forEach(element => {
        if (element.dataset.level !== "0") {
            element.classList.add('hidden');
        }
    });

    levelsArray.forEach( element => {
        const elementLevel = parseInt(element.dataset.level);
        if(elementLevel <= parseInt(levelToShow) && elementLevel !== 0)  {
            element.classList.remove('hidden');
        }
    });

}

// -------------------------------- SHOW N LEVEL
document.querySelectorAll('.btn_show_level').forEach(element => element.addEventListener('click', function(event) {
    showNLevel(parseInt(event.currentTarget.dataset.level));
}));
