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



