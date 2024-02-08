setTimeout(function() {
    // Hamburger icon click event
    console.log('prvaprovjera');
    $("#hamburger").click(function() {
        console.log('drugaprovjera');
        // Toggle the visibility of the navigation menu
        $("#nav-menu").slideToggle();
});
}, 500);