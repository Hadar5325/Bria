
export function CarPreview({ car }) {
    const imgName = car.vendor ? car.vendor : 'default'
    return <article className="car-preview">
        <h2> {car.vendor} </h2>
        <h2> {car.maxSpeed} </h2>
        <img src={`assets/style/img/${imgName}.png`} />
    </article>
}