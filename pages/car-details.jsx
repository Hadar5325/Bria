const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { carService } from "../services/copy-car.service.js"

export function CarDetails() {
    
    const [car, setCar] = useState(null)
    const param = useParams()
    console.log(param)
    const navigate = useNavigate()

    useEffect(() => {
        loadCar()
    }, [])

    function loadCar() {
        carService.get(param.carId).then(setCar)
            .catch((err) => {
                console.log(err)
                navigate('/car')
            })
    }

    function onGoBack() {
        navigate('/car')
    }

    if (car === null) return <h1>Loading...</h1>
    return <section className="car-details">

        <h1>car vendor : {car.vendor}</h1>
        <h5>car vendor : {car.maxSpeed}</h5>
        <img src={`assets/style/img/${car.vendor}.png`} alt="" />
        <button onClick={onGoBack}>Go Back</button>
        <Link to={`/car/edit/${car.id}`}>Edit me</Link>
    </section>
}