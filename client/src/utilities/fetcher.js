const BASE_URL = 'http://localhost:5000';

export default {
    get: (endpoint, callback) => {
        fetch(BASE_URL + endpoint)
            .then(data => data.json())
            .then(callback)
            .catch(console.log)
        },
    post: (endpoint, callback) => {
        fetch(BASE_URL + endpoint, {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(callback)
            .then(response => console.log(response))
    }
}