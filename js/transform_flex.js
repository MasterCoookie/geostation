let clicks = Array.from(document.getElementsByClassName('click'));
let back_arrows = Array.from(document.getElementsByClassName('back-arrow'));
let down_arrows = Array.from(document.getElementsByClassName('down-arrow'));
let locker = true;
let content = document.getElementsByTagName('main');

clicks.forEach(element => {
    element.addEventListener('click', e => {
        if(locker) {
            element.classList.replace('backed', 'transform');
            clicks.forEach(click => {
                if(click.dataset.index != e.target.dataset.index) {
                    click.classList.add('nullflex');
                }
            });
            locker = !locker;
        }
    });
});

back_arrows.forEach(element => {
    element.addEventListener('click', () => {
        clicks.forEach(click => {
            click.classList.replace('transform', 'backed');
            click.classList.remove('nullflex');
            setTimeout(() => {
                locker = !locker;
            }, 100);
            // console.log(click.classList);
        })
    });
});

down_arrows.forEach(element => {
    element.addEventListener('click', () => {
        console.log(content);
        content[0].scrollIntoView();
    })
})