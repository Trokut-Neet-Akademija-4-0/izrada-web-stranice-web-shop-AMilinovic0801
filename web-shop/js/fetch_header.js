fetch('/web-shop/partials/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        console.log(html);
        document.getElementById('nav').innerHTML = html; // Inject fetched HTML into the <nav> element
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });