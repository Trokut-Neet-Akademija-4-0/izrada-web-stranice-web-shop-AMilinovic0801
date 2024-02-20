let partForCart = '/web-shop/database/parts.json';
let currentItemIndexForCart = localStorage.getItem('selectedIndex');

async function moveToCart() {
    try {
        await moveItemToCart(partForCart, currentItemIndexForCart);
    } catch (error) {
        console.error('Error moving item to cart:', error);
    }
}

async function moveItemToCart(url, index) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const item = data.items[index];
        if (!item) {
            throw new Error('Item not found');
        }
        
        //sprema odabrani item u local storage skupa sa ostalima
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //u slucaju da nema nijednog izabranog itema, sprema se prazan array
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // pokrece funkciju pomocu koje prikazujemo spremljene iteme u LocalStorgeu na Cart page
        displayCartItems();
    } catch (error) {
        console.error('Error moving item to cart:', error);
    }
}

function displayCartItems() {
    let section = document.getElementById('items');
    section.innerHTML = ''; // Brise sve sta je trenutno u cartu, uz pomoc ovog izbjegavamo duplitkate osim ako korisnik sam ne zeli kupiti vise istih itema

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //ponovno ispsisuje u cart sve iteme sto su spremljeni u LocalStorage, || [] je tu u slucaju da nemamo nista u cartu da ne pukne kod

    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);// racuna total price itema u kosari

    cartItems.forEach(item => {
        let createDiv = document.createElement('div');
        createDiv.className = 'item';
        let createP = document.createElement('p');
        let createP2 = document.createElement('p');
        let createDelete = document.createElement('button');
        createDelete.className = 'delete';
        createP.textContent = item.name;
        createP2.textContent = `€ ${item.price}`;
        createDelete.textContent = 'x'
        createDiv.appendChild(createP);
        createDiv.appendChild(createP2);
        createDiv.appendChild(createDelete);
        section.appendChild(createDiv);
    });

    let totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.textContent = `Total: € ${totalPrice.toFixed(2)}`; // Fixed to 2 decimal places
    section.appendChild(totalDiv);

    listenerDeleteButton();
    
    localStorage.removeItem('selectedIndex');
}

function listenerDeleteButton(){ //morao sam izbaciti u drugu funkciju ovo za delete jer sam je prvo drzao u for each petlji koja bi radi window.onload se pokretela i onda bi dodavala event listener na event listener u delete botune. Ovako se dodaju samo jedan put. Kada ih ima vise tada se brisu svi itemi iza selectiranog delete botuna.
    
        let arrayDelete = document.querySelectorAll('.delete');
        let deleteButtons = Array.from(arrayDelete); //node listu pretvara u array
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        deleteButtons.forEach((button, buttonIndex) => {
            button.addEventListener('click', function() {
                // Index sada ima vrijednost kliknutog botuna i to koristim kao nacin na koji cu izbrisat item iz Local Storagea
                console.log('Index of clicked delete button:', buttonIndex);

                cartItems.splice(buttonIndex, 1); // brisem item iz arraya uz pomoc splice
                console.log(cartItems);
                localStorage.setItem('cartItems', JSON.stringify(cartItems)); //vracam updated array u local storage

                //relodam stranicu tako da se promjena prikaze
                window.location.reload();
            });
        });
}

function deleteOrder(){
    localStorage.removeItem('cartItems');
}
window.onload = displayCartItems

