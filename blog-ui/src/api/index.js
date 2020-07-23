import axios from 'axios'

let credentials= null

const HTTP = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    auth: credentials
})

HTTP.interceptors.request.use(config => {
    config.auth = credentials
    return config
})

export const setCredentials = c => credentials = c

export { HTTP as default }
