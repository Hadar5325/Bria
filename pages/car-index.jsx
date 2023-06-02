const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { CarFilter } from "../cmps/car-filter.jsx"
import { CarList } from "../cmps/car-list.jsx"
import { carService } from "../services/copy-car.service.js"

// import { carService } from "../services/car.service"
// import { CarDetails } from "./car-details.jsx"
// import { UserMsg } from "../cmps/user-msg.jsx"

export function CarIndex() {

    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())
    const [cars, setCars] = useState([])
    // const [selectedCar, setSelectedCar] = useState(null)
    // const [userMsg, setUserMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        loadCars()
    }, [filterBy])


    function loadCars() {
        carService.query(filterBy).then(carsToUpdate => {
            setCars(carsToUpdate)
            setIsLoading(false)
            console.log(cars)
        })
    }

    function onRemoveCar(carId) {
        console.log('removing...', carId)
        carService.remove(carId).then(() => {
            console.log('remove')
            const updateCars = cars.filter(car => car.id !== carId)
            setCars(updateCars)
            // setUserMsg('Car removed successfully')
            // flashMsg('car removed!')
            // flashMsg('car removed!')
        })
    }

    // function flashMsg(msg) {
    //     setUserMsg(msg)
    //     setTimeout(() => {
    //         setUserMsg('')
    //     }, 3000)
    // }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    
    return <section className="car-index">
        {/* {userMsg && <UserMsg msg={userMsg} />} */}
        {/* {!selectedCar && <div> */}
        <div>
            <h1>hello from car index</h1>
            <CarFilter onSetFilter={onSetFilter} />

            <Link to="/car/edit"> Add car</Link>
            {!isLoading && <CarList cars={cars} onRemoveCar={onRemoveCar} />}
            {isLoading && <div>Loading.... </div>}
            {!cars.length && <div>No items to show</div>}
        </div>
    </section>
}








// function onSelectCar(carId) {
//     carService.get(carId).then(car => {
//         setSelectedCar(car)
//     })
// }



{/* {selectedCar && <CarDetails
    car={selectedCar}
    onGoBack={() => setSelectedCar(null)} />} */}