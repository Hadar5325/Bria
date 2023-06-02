const { useState, useEffect } = React
import { carService } from "../services/copy-car.service.js"

export function CarFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(carService.getDefaultFilter())
    console.log(filterByToEdit)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'number' ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="car-filter">
        <h2>filter our cars</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="vendor">vendor</label>
            <input
                id="vendor"
                type="text"
                value={filterByToEdit.txt}
                placeholder="by vendor"
                onChange={handleChange}
                name="txt"
            />

            <br />
            <label htmlFor="minSpeed">Min speed</label>
            <input
                id="minSpeed"
                type="number"
                placeholder="by min speed"
                value={filterByToEdit.minSpeed}
                onChange={handleChange}
                name="minSpeed" />
            <button>FilterCars!</button>
        </form>

    </section>
}