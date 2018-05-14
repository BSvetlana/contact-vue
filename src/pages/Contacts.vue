<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-3">
                  <ContactList :contacts = 'contacts' @contactDelete = "deleteContact"/>
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
import { contact } from '../services/ContactService'



export default {
  components: {
    ContactList,
    ContactDetails,
  },
  data() {
    return {
      contacts: []
    }
  },
  computed: {
    routeContact(){
      return this.contacts.find(contact=>contact.id == this.$route.params.id)
    }
  },
  beforeRouteEnter(to, from, next) {
    contact.getAll()
      .then((response) => {
        next((vm) => {
          vm.contacts = response.data
        })
      })
  },
  methods: {
    deleteContact(id){
      let index = this.contacts.findIndex(contact => contact.id == id)
      this.contacts.splice(index,1)
    
    }
  }
  }



</script>

<style>

</style>


