let coinCount = 0;

document.getElementById('clickbutton').addEventListener('click', () => {
    coinCount++;
    const coinCountElement = document.getElementById('coinCount');
    coinCountElement.textContent = coinCount;
    coinCountElement.classList.add('animated');

    //Remove the animation class after it ends to allow re-triggering
    setTimeout(() => {
        coinCountElement.classList.remove('animated');
        }, 500); //Duration should match the CSS animation duration
});

