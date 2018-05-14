import axios from 'axios'

export default class Contact {

    constructor() {
        axios.defaults.baseURL = "http://localhost:3000/api/";

    }


    getAll() {
        return axios.get('contacts')
    }

    add(newContact) {
        return axios.post('contacts',newContact)
    }

    delete(id){
        return axios.delete(`contacts/${id}`)
    }

    edit (contact) {
        return axios.put(`contacts/${contact.id}`,contact)
    }

    get(id) {
        return axios.get(`contacts/${id}`)
    }
}

export const contact = new Contact()