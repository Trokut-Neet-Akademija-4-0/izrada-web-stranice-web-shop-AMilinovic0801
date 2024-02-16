let main_title = document.getElementById('title');
let h2_title = document.getElementById('h2-title');
let text_cars = document.getElementById('text-car');
let counter = document.getElementById('counter');
let year = document.getElementById('year');
let chassis_number = document.getElementById('chassis-number');
let motor = document.getElementById('motor');
let trans = document.getElementById('trans');
let imgID = ['car-picture1', 'car-picture2', 'car-picture3', 'car-picture4', 'car-picture5', 'car-picture6'];
let galleryID = ['car-gallery1', 'car-gallery2', 'car-gallery3', 'car-gallery4', 'car-gallery5', 'car-gallery6'];
let CarsJson = '/web-shop/database/cars.json'
let currentItemIndex = localStorage.getItem('selectedIndexCars');


getCarDetails(CarsJson, currentItemIndex);

async function getCarDetails(url, index){
    const fetchPromise =  await fetch(url); //cekaj dohvacanje url-a
    const data = await fetchPromise.json(); //parsiraj json
    const item = data.cars[index]; // Us pomoc indexa u listi json kojeg smo dohvatili cu dohvatit sve podatke za taj item
    main_title.innerHTML = item.title;
    h2_title.innerHTML = item.title;
    text_cars.innerHTML = item.key_facts;
    counter.innerHTML = `Mileage: ${item.details.Mileage}`;
    year.innerHTML = `Year: ${item.details.Year}`;
    chassis_number.innerHTML = `Chassis number: ${item.details.Chassis_number}`;
    motor.innerHTML = `Fuel: ${item.details.Fuel}`;
    trans.innerHTML = `Transmission: ${item.details.Transmission}`;
    let picture = item.images;
    pictureArray(picture);
}


async function pictureArray(img){

    for (let i = 0; i < imgID.length; i++) { //iteriramo kroz array (moze bilo koji od imgID, galleryID ili img posto su svi iste duzine i poslozeni na isti nacin)
        let imgElement = document.getElementById(imgID[i]); //radimo varijablu koja ce spremiti index za svaku iteraciju
        let galleryElement = document.getElementById(galleryID[i]); //ista stvar za gallery

        imgElement.setAttribute('src', img[i]); //dodajemo za svaku iteraciju index slike u index imgElementa
        galleryElement.setAttribute('data-src', img[i]); //ista stvar za galeriju, na taj nacin ce slike u galeriji biti poslozene kao i slike na stranici
    }

}