document.getElementById('burger').onclick = function() {
    this.classList.toggle('burger--active');
    document.getElementById('body').classList.toggle('body--active');
    document.getElementById('top-inner').classList.toggle('header__top-inner--active');
    document.getElementById('navigation').classList.toggle('header__navigation--active');
    document.getElementById('menu-list').classList.toggle('menu-list--active');
}