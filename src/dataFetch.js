const getStations = () => {
    return fetch('https://nossonapptest7-14-20.azurewebsites.net/all-stations/', {
        method: "GET"
    })
}

const getTrainsApproaching = (stationId) => {
    return fetch(`https://nossonapptest7-14-20.azurewebsites.net/trains-approaching/${stationId}/`, {
        method: "GET"
    })
    
}

export { getStations, getTrainsApproaching };