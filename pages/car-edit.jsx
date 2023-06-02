
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { carService } from "../services/copy-car.service.js"

export function CarEdit() {

    const [carToEdit, setCarToEdit] = useState(carService.getEmptyCarWithoutID)
    const navigate = useNavigate()
    const { carId } = useParams()

    useEffect(() => {
        if (!carId) return
        loadCar()
    }, [])

    function loadCar() {
        carService.get(carId).then(setCarToEdit)
            .catch((err) => {
                console.log(err)
                navigate('/car')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setCarToEdit((prevCar) => ({ ...prevCar, [field]: value }))
    }
    console.log(carToEdit)


    function onSaveCar(ev) {
        ev.preventDefault()
        carService.save(carToEdit).then((car) => {
            console.log('car', car)
            navigate('/car')
        })
    }

    return <section>
        <h2>{carToEdit.id ? 'Edit car' : 'Add car'}</h2>

        <form onSubmit={onSaveCar}>
            <label htmlFor="vendor">Vendor:</label>
            <input type="text"
                name="vendor"
                id="vendor"
                placeholder="Enter vendor..."
                value={carToEdit.vendor}
                onChange={handleChange} />


            <label htmlFor="vendor">Max speed:</label>
            <input type="number"
                name="maxSpeed"
                id="maxSpeed"
                placeholder="Enter maxSpeed..."
                value={carToEdit.maxSpeed}
                onChange={handleChange} />
            <div>
                <button>{carToEdit.id ? 'Save' : 'Add'}</button>
                <Link to="/car">Cancel</Link>
            </div>
        </form>
    </section>
}








    // const [carToEdit, setCarToEdit] = useState(carService.getEmptyCarWithoutID())
    // const navigate = useNavigate()
    // const { carId } = useParams()

    // useEffect(() => {
    //     if (!carId) return
    //     loadCar()
    // }, [])

    // function loadCar() {
    //     carService.get(carId)
    //         .then(setCarToEdit).catch((err) => {
    //             console.log('had issues', err)
    //             navigate('/car')
    //         })
    // }

    // function handleChange({ target }) {
    //     console.log(target)
    //     console.log(target.value)
    //     let { value, type, name: field } = target
    //     value = type === 'number' ? +value : value
    //     setCarToEdit((prevCar) => {
    //         console.log(prevCar, "prev")
    //         return { ...prevCar, [field]: value }
    //     })
    // }

    // function onSavedCar(ev) {
    //     ev.preventDefault()
    //     carService.save(carToEdit).then((car) => {
    //         console.log('car', car)
    //         navigate('/car')

    //     })

    // }


    // return <section>
    //     <h2>{carToEdit.id ? 'Edit this car' : 'Add a new car'}</h2>
    //     <form onSubmit={onSavedCar}>
    //         <label htmlFor="vendor">Vendor:</label>
    //         <input type="text"
    //             name="vendor"
    //             value={carToEdit.vendor}
    //             id="vendor"
    //             onChange={handleChange}
    //             placeholder="Enter vendor..."
    //         />
    //         <hr />
    //         <label htmlFor="maxSpeed">Max speed:</label>
    //         <input type="number"
    //             name="maxSpeed"
    //             value={carToEdit.maxSpeed}
    //             id="maxSpeed"
    //             onChange={handleChange}
    //             placeholder="Enter maxSpeed..."
    //         />
    //         <div>
    //             <button>{carToEdit.id ? 'Save' : 'Add'}</button>
    //             <Link to="/car">cancel</Link>
    //         </div>
    //     </form>
//     </section>
// }