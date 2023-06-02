const { Link } = ReactRouterDOM
import { CarPreview } from "./car-preview.jsx"


export function CarList({ cars, onRemoveCar, onSelectCar }) {
    console.log(typeof (cars))
    return <ul className="car-list">
        {cars.map(car => {
            console.log(car)
            return <li key={car.id}>
                <CarPreview car={car} />
                <div>
                    <button onClick={() => { onRemoveCar(car.id) }}>X</button>
                    {/* <button onClick={() => { onSelectCar(car.id) }}>select car!</button> */}
                    <Link to={`/car/${car.id}`}>select car</Link>
                </div>
            </li>
        })}
    </ul>
}