
import { utilService } from "./util.service.js";
// import { storageService } from './async-storage.service.js'
import { storageService } from './copy-async.js'
const CAR_KEY = 'carDB'
_createCars()
export const carService = {
    query,
    getDefaultFilter,
    remove,
    get,
    getEmptyCar,
    save,
    getEmptyCarWithoutID
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(CAR_KEY)
        .then(cars => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                cars = cars.filter(car => regex.test(car.vendor))
            }
            if (filterBy.minSpeed) {
                cars = cars.filter(car => car.maxSpeed >= filterBy.minSpeed)
            }
            return cars
        })
}

function save(car) {
    if (car.id) {
        return storageService.put(CAR_KEY, car)
    } else {
        return storageService.post(CAR_KEY, car)
    }
}


function get(carId) {
    return storageService.get(CAR_KEY, carId)
}

function getDefaultFilter() {
    return { txt: '', minSpeed: '' }
}
function remove(carId) {
    return storageService.remove(CAR_KEY, carId)
}

function _createCars() {
    let cars = utilService.loadFromStorage(CAR_KEY)
    if (!cars || !cars.length) {
        cars = []
        cars.push(_createCar('audu', 300))
        cars.push(_createCar('fiak', 120))
        cars.push(_createCar('subali', 50))
        cars.push(_createCar('mitsu', 150))
        utilService.saveToStorage(CAR_KEY, cars)
    }
}
function getEmptyCar(vendor = '', maxSpeed = '') {
    return { id: '', vendor, maxSpeed }
}
function getEmptyCarWithoutID(vendor = '', maxSpeed = '') {
    return { vendor, maxSpeed }
}
function _createCar(vendor, maxSpeed = 250) {
    const car = getEmptyCar(vendor, maxSpeed)
    car.id = utilService.makeId()
    return car
}