const { useState, useEffect } = React

export function Filter() {

    const [filterBy, setFilterBy] = useState({ startDay: '', endDay: '' })


    function handleChange({ target }) {
        console.log(target)
    }

    return <form className="dates">
        <label htmlFor="startDay" />
        <input
            id="startDay"
            name="startDay"
            value={filterBy.startDay}
            onChange={handleChange}
            placeholder="תאריך הגעה"
        ></input>
        <input
            name="endDay"
            value={filterBy.endDay}
            placeholder="תאריך סיום"
            onChange={handleChange}
        ></input>

        {/* <label htmlFor=""></label> */}
    </form>
}