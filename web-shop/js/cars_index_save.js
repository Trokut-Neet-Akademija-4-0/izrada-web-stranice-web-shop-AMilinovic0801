document.querySelectorAll('section.car_selection li').forEach(function(li, index) {
    li.addEventListener('click', function(event) {
        // spremamo index li-a u local storage koji cemo koristit u parts_description_call.js
        localStorage.setItem('selectedIndexCars', index);
    });
});