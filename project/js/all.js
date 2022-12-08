// Showing/hiding sub menu on hover
const showMenu = event => {
    let menu = event.target;
    let sub = menu.lastElementChild;
    sub.style.display = 'block';
}

const hideMenu = event => {
    let menu = event.target;
    let sub = menu.lastElementChild;
    sub.style.display = 'none';
}

// Create animated counter
const animatedCounter = () => {
    let start1 = 300;
    let myCount1 = setInterval(() => {
        document.getElementById('counter-1').innerHTML = ++start1;
        if (start1 === 730)
            clearInterval(myCount1);
    }, 5);

    let start2 = 0;
    let myCount2 = setInterval(() => {
        document.getElementById('counter-2').innerHTML = ++start2;
        if (start2 === 80)
            clearInterval(myCount2);
    }, 40);

    let start3 = 500;
    let myCount3 = setInterval(() => {
        document.getElementById('counter-3').innerHTML = ++start3;
        if (start3 === 920)
            clearInterval(myCount3);
    }, 5);

    let start4 = 0;
    let myCount4 = setInterval(() => {
        document.getElementById('counter-4').innerHTML = ++start4;
        if (start4 === 75)
            clearInterval(myCount4);
    }, 45);
}


// Show animated counter when in viewport
const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

let showedCounter = 0;
const myStatistics = document.getElementById('statistics');
document.addEventListener('scroll', () => {
    if (isInViewport(myStatistics) && showedCounter === 0) {
        animatedCounter();
        showedCounter = 1;
    }
});



