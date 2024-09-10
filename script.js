document.addEventListener('DOMContentLoaded', () => {
    const numberGrid = document.getElementById('number-grid');
    const sequenceBox = document.getElementById('sequence-box');
    const clickedNumbers = [];

    for (let i = 1; i <= 90; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number green';
        numberDiv.textContent = i;
        numberDiv.addEventListener('click', () => toggleNumber(i, numberDiv));
        numberGrid.appendChild(numberDiv);
    }

    function toggleNumber(num, element) {
        if (element.classList.contains('green')) {
            element.classList.remove('green');
            element.classList.add('red');
            clickedNumbers.push(num);
        }
        updateSequence();
    }

    function updateSequence() {
        sequenceBox.textContent = 'Latest clicks: ' + clickedNumbers.slice(-10).join(', ');
    }
});
