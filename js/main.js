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

const btnGlobal = document.querySelector('.btn_global');
btnGlobal.addEventListener('click', function() {
    btnGlobal.classList.toggle('btn_global--open');
    document.querySelectorAll('.level').forEach(element => {
        if (element.dataset.level !== "0") {
            element.classList.toggle('hidden');
        }

    });
    document.querySelectorAll('.btn_close').forEach(element => {
        element.classList.toggle('btn_close--open');
    });
});