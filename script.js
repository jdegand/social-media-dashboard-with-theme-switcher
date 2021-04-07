const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', ()=> {

    let socialMediaDashboard = document.querySelector('.social-media-dashboard');
    let followerCount = document.querySelectorAll('.follower-count');
    let card2Number = document.querySelectorAll('.card2-number');
    let cards = document.querySelectorAll('.card');
    let cards2 = document.querySelectorAll('.card2');
    let body = document.querySelector('body');
    let names = document.querySelectorAll('.name');
    let darkModeText = document.querySelector('.dark-mode-text');
    let label = document.querySelector('.label');

    cards.forEach(card => card.classList.toggle('card-bg'));
    cards2.forEach(card => card.classList.toggle('card-bg'));
    names.forEach(name => name.classList.toggle('gray'));
    followerCount.forEach(item => item.classList.toggle('white'));
    body.classList.toggle('body-bg');
    darkModeText.classList.toggle('gray');
    label.classList.toggle('label-bg')
    socialMediaDashboard.classList.toggle('white');
    card2Number.forEach(card => card.classList.toggle('white'));
})
