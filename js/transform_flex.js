let clicks = Array.from(document.getElementsByClassName('click'));
let back_arrows = Array.from(document.getElementsByClassName('back-arrow'));
let down_arrows = Array.from(document.getElementsByClassName('down-arrow'));
let locker = true;
let footer = document.getElementById("footer");
let done = (getter >= day);
let content = document.getElementById('content');
let contents = Array.from(document.getElementsByClassName('contents'));
let contactContainer = document.getElementById("contact-container");
let flags = document.getElementById("langs");


clicks.forEach(element => {
    element.addEventListener('click', e => {
        if(locker && e.target.dataset.index && is && done) {
            element.classList.replace('backed', 'transform');
            clicks.forEach(click => {
                if(click.dataset.index != e.target.dataset.index) {
                    click.classList.add('nullflex');
                }
            });
            if (e.target.dataset.index == 4) {
                document.getElementById("contact-header").style.display = "none";
                contactContainer.style.display = "block";
                setTimeout(() => {
                    contactContainer.classList.remove("transparent");
                }, 500);
            } else {
                contents[e.target.dataset.index].style.display = "grid";
                footer.style.display = "grid";
                flags.style.display = "none";
            }
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
            contactContainer.classList.add("transparent");
            setTimeout(() => {
                document.getElementById("contact-header").style.display = "block";
                contactContainer.style.display = "none";
                flags.style.display = "grid";
            }, 750);
        });
        contents.forEach(contentElement => {
            contentElement.style.display = "none";
            footer.style.display = "none";
        })
    });
});

let count = 0;
down_arrows.forEach(element => {
    element.addEventListener('click', () => {
        document.getElementById("scrollto").scrollIntoView();
    })
})