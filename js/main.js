// hide child containers
const buttonsClose = document.querySelectorAll('.btn_close');
buttonsClose.forEach(element => element.addEventListener('click', function(event){
    const currentButton = event.target;
    const parentsChildren = currentButton.parentElement.children;
    if(parentsChildren) {
        for (element of parentsChildren) {
            if (element.classList.contains('container')) {
                element.classList.toggle('hidden');
            }
        }
    }
}));

// --------- SHOW N LEVEL FUNCTION
function showNLevel(levelToShow) {
    const levelsArray = document.querySelectorAll(`.container`);
    levelsArray.forEach(element => {
        element.classList.add('hidden');
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