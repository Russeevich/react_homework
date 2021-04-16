export function fetchCardData(payload){
    return fetch('https://loft-taxi.glitch.me/card', 
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
}

export function getCardData(payload){
    return fetch('https://loft-taxi.glitch.me/card?' +  new URLSearchParams(payload), 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
}