function openPopup(popupId) {
    let html = document.getElementById(popupId);

    html.style.backgroundColor = 'black';
}

function closePopup(popupId) {
    let html = document.getElementById(popupId);

    html.style.backgroundColor = 'inherit';
}

/*
function closePopup() {
    var popups =
document.getElementsByClassName('popup');
    for (var i = 0; i < popups.length; i++ ) {
popups[i].classList.remove('active');
    }
}
*/

document.addEventListener('DOMContentLoaded', function() {
    var areas = 
document.querySelectorAll('area');
    areas.forEach(function(area) {
        area.addEventListener('click',
function(){
        var popupId = 
area.getAttribute('data-popup');
        openPopup(popupId);
        });
    });
});
