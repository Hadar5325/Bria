function createEventEmitter() {
    const listenersMap = {}
    window.mapmap = listenersMap
    return {
        on(evName, listener) {
            listenersMap[evName] = (listenersMap[evName]) ? [...listenersMap[evName], listener] : [listener]
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
            }
        },
        emit(evName, data) {
            if (!listenersMap[evName]) return
            listenersMap[evName].forEach(listener => listener(data));
        }
    }
}

export const eventBusService = createEventEmitter()

// Service Testing

eventBusService.on('some-event', (data) => {
    console.log('got some event with data', data)
})

eventBusService.on('some-event', (data) => {
    console.log('nice!', data)
})
eventBusService.emit('some-event', 100)
eventBusService.emit('some-event', 300000)