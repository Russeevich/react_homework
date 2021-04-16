export function fetchRoutesData(){
    return fetch('https://loft-taxi.glitch.me/addressList', 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}

export function getRoutesData(payload){
    return fetch('https://loft-taxi.glitch.me/route?' + new URLSearchParams(payload), 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}