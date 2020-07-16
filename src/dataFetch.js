const getStations = () => {
    return fetch(`http://metronorthdistanceapp.com/all-stations/`, {
        method: "GET"
    })
}

const getTrainsApproaching = (stationId) => {
    return fetch(`http://metronorthdistanceapp.com/trains-approaching/${stationId}/`, {
        method: "GET"
    })
    
}

export { getStations, getTrainsApproaching };