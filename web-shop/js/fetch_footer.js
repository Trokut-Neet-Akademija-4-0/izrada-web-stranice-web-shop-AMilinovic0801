fetch('/web-shop/partials/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('nav2').innerHTML = html; // Inject fetched HTML into the <nav> element
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });