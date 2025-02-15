var row = document.querySelectorAll('.row');

function toggleElement(row) {
        row.parentElement.children[1].classList.toggle('hide');
        row.children[1].classList.toggle('hide');
        row.children[2].classList.toggle('hide');
}

row.forEach((q) => {
    q.addEventListener('click', (e) => {
        let targetRow = e.currentTarget;
        toggleElement(targetRow);


        row.forEach((q) => {
            if(q != targetRow && !q.parentElement.children[1].classList.contains('hide')) {
                toggleElement(q);
            }
        });

    })
})

