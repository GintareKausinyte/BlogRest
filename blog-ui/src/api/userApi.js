import HTTP from '.'


export default {
    getUser(){
        return HTTP.get(`http://localhost:8080/user`)
    }
}