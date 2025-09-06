function showSidebar() {
    const show = document.querySelector('.side-bar');
    show.style.display = 'block'
}

function hideSidebar() {
    const hide = document.querySelector('.side-bar');
    hide.style.display = 'none'
}

function gotoTreats () {
    const treats = document.getElementById('treats');
    window.location.href = 'treats  '
}

document.getElementById('order1').style.display = 'none';
document.getElementById('order2').style.display = 'none';
document.getElementById('order3').style.display = 'none';
document.getElementById('order4').style.display = 'none';

function Order1 () {
    document.getElementById('order1').style.display = 'flex';
    document.getElementById('close1').style.display = 'none';
}