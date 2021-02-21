const buttonsClose = document.querySelectorAll('.btn_close');
buttonsClose.forEach(element => element.addEventListener('click', function(event){
    const currentButton = event.currentTarget;
    const level = parseInt(currentButton.dataset.level);
    const line = currentButton.dataset.line;
    const index =  currentButton.dataset.index;

    currentButton.classList.toggle('btn_close--open');
    document.querySelectorAll(`.level.${line}[data-level="${level + 1}"][data-index="${index}"]`).forEach(element => {
        element.classList.toggle('hidden');
    });
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
        document.querySelectorAll('.btn_close').forEach(element => {
            element.classList.remove('btn_close--open');
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
    btnCloseArray.forEach(element => {
        element.classList.remove('btn_close--open');
    });

    levelsArray.forEach( element => {
        const elementLevel = parseInt(element.dataset.level);
        if(elementLevel <= parseInt(levelToShow) && elementLevel !== 0)  {
            element.classList.remove('hidden');
        }
    });
    btnCloseArray.forEach(element => {
        const elementLevel = parseInt(element.dataset.level);
        if(elementLevel === parseInt(levelToShow) && elementLevel !== 0)  {
            element.classList.add('btn_close--open');
        }
    });

}

// -------------------------------- SHOW N LEVEL
document.querySelectorAll('.btn_show_level').forEach(element => element.addEventListener('click', function(event) {
    console.log(parseInt(event.currentTarget.dataset.level));
    showNLevel(parseInt(event.currentTarget.dataset.level));
}));
