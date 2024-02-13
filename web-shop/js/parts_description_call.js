let partHeader = document.getElementById('part_header')
let partPicture = document.getElementById('part_picture')
let partList = document.getElementById('part_list')
let partName = document.getElementById('part_name')
let partPrice = document.getElementById('part_price')
let partDescription = document.getElementById('part_description')
let partShippingTime = document.getElementById('part_shipping_time')
let partJson = '/web-shop/database/parts.json'
let currentItemIndex = localStorage.getItem('selectedIndex'); //dobavljamo index iz local storeagea, tu smo ga 'poslali' iz parts_index_save.js
let currentPicture = localStorage.getItem('selectedPictureSrc'); //ista stvar i za link slike


getPartDetails(partJson, currentItemIndex);

async function getPartDetails(url, index){
    const fetchPromise =  await fetch(url); //cekaj dohvacanje url-a
    const data = await fetchPromise.json(); //parsiraj json
    const item = data.items[index]; // Us pomoc indexa u listi json kojeg smo dohvatili cu dohvatit sve podatke za taj item
    partPicture.setAttribute('src', currentPicture);
    partHeader.innerHTML = item.name;
    partName.innerHTML = `Item name: ${item.name}`;
    partPrice.innerHTML = `Item price: ${item.price} €`;
    partDescription.innerHTML = `Item description: ${item.description}`;
    partShippingTime.innerHTML = `Shipping time to Europe: ${item.shipping_time}`;
}

