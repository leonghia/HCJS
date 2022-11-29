// Showing/hiding sub menu on hover
const showMenu = event => {
    let menu = event.target;
    let sub = menu.lastElementChild;
    setTimeout(() => sub.style.display = 'block', 300);
}

const hideMenu = event => {
    let menu = event.target;
    let sub = menu.lastElementChild;
    setTimeout(() => sub.style.display = 'none', 300);
}



