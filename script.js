const selectCars = document.querySelector('#select-car');
const carName = document.querySelector('.car');
const price = document.querySelector('.price');

const getData = async () => {
    const responce = await fetch('dbCars.json');
    return await responce.json();
};


const showItem = function (data) {
    data.cars.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = element.brand;
        option.value = element.brand;
        selectCars.appendChild(option);
    });
    selectCars.addEventListener('change', () => {
        getData();
        data.cars.forEach(element => {
            if (element.brand == selectCars.options[selectCars.selectedIndex].value) {
                carName.innerHTML = `Тачка ${element.brand} ${element.model}`;
                price.innerHTML = `Цена: ${element.price}$`;
            }
        });
    });
};

getData()
    .then(data => showItem(data))
    .catch(error => {
        console.log(error);
    });

