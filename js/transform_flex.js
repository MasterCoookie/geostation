let clicks = Array.from(document.getElementsByClassName('click'));
let back_arrows = Array.from(document.getElementsByClassName('back-arrow'));
let down_arrows = Array.from(document.getElementsByClassName('down-arrow'));
let locker = true;
let content = document.getElementById('content');
let contents = Array.from(document.getElementsByClassName('contents'));
let contactContainer = document.getElementById("contact-container");
let flags = document.getElementById("langs");


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
            if (e.target.dataset.index == 4) {
                document.getElementById("contact-header").style.display = "none";
                contactContainer.style.display = "block";
                setTimeout(() => {
                    contactContainer.classList.remove("transparent");
                }, 500);
            } else {
                contents[e.target.dataset.index].style.display = "grid";
                flags.style.display = "none";
            }

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
            contactContainer.classList.add("transparent");
            setTimeout(() => {
                document.getElementById("contact-header").style.display = "block";
                contactContainer.style.display = "none";
                flags.style.display = "grid";
            }, 750);
        });
        contents.forEach(contentElement => {
            contentElement.style.display = "none";
        })
    });
});

down_arrows.forEach(element => {
    element.addEventListener('click', () => {
        console.log(content);
        content[0].scrollIntoView();
    })
})