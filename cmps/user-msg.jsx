const { useState } = React

import { eventBusService } from "../services/event-bus.service.js"

export function UserMsg({msg}) {

    return <div className="user-msg success">
        {msg}
    </div>

    // const [msg, setMsg] = useState({
    //     txt: 'hello',
    //     type: 'success'
    // })

    // return <div className={"user-msg " + msg.type}>
    //     {msg.txt}
    // </div >
}

