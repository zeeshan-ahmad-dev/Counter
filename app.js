const playerHtml = `<div class="player">
<h3>Zeeshan</h3>
Points: <span class="count">00</span>
<div>
    <button class="plus">+</button>
    <button class="minus">-</button>
</div>
</div>`

// const name1 = prompt("Enter name of player 1")
// const name2 = prompt("Enter name of player 2")

const players =  document.querySelectorAll('.player');
players.forEach(player => {
    player.querySelector('.name').textContent = prompt("Enter name of player");

    const countSpan = player.querySelector('.count');
    const plusButton = player.querySelector('.plus');
    const minusButton = player.querySelector('.minus');

    plusButton.addEventListener('click',() => {
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count + 1;
    })
    minusButton.addEventListener('click',() => {
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count - 1;
    })
})