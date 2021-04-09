export function fetchLoginData(payload){
    return fetch('https://loft-taxi.glitch.me/auth', 
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

export function fetchRegisterData(payload){
    return fetch('https://loft-taxi.glitch.me/register', 
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