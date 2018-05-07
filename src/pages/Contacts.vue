<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-3">
                  <ContactList :contacts = 'contacts'/>
              </div>
              <div class="col-9">
                  <ContactDetails :contact = 'routeContact'/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ContactList from "../components/ContactList";
import ContactDetails from "../components/ContactDetails";

import axios from "axios";


export default {
  components: {
    ContactList,
    ContactDetails,
  },
  created(){
    this.getContact();
  },
  data() {
    return {
      contacts: []
      // contacts: [
      //   { id:1, name: "Branko Bisacki", email: 'branko@gmail.com', number: '555-999' },
      //   { id:2, name: "Marina Milosevic", email: 'marina@gmail.com', number: '555-888' },
      //   { id:3, name: "Sasa Gajic", email: 'sasa@gmail.com', number: '555-777' },
      //   { id:4, name: "Svetlana Bisacki", email: 'svetlana@gmail.com', number: '555-666' }
      // ]
    }
  },
  computed: {
    routeContact(){
      return this.contacts.find(contact=>contact.id == this.$route.params.id)
    }
  },
  methods: {
    getContact(){
      axios.get('https://api.randomuser.me/')
        .then(response => {
          let contact = {}
          contact.id = response.data.results[0].id.name
          contact.name = response.data.results[0].name.first
          contact.email = response.data.results[0].email
          contact.number = response.data.results[0].cell

          this.contacts.push(contact);
        })
        .catch((error) => {
          //console.log(error)
        })

        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

        axios.post('posts', {
          body: {firstName: 'Svetlana'}
        }).then((response) => {
          console.log("Success",response)
        }).catch((error) => {
          console.log('Error',error)
        })
    }
  }

  }

</script>

<style>

</style>


