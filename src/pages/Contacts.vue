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


export default {
  components: {
    ContactList,
    ContactDetails,
  },
  data() {
    return {
      contacts: [
        { id:1, name: "Branko Bisacki", email: 'branko@gmail.com', number: '555-999' },
        { id:2, name: "Marina Milosevic", email: 'marina@gmail.com', number: '555-888' },
        { id:3, name: "Sasa Gajic", email: 'sasa@gmail.com', number: '555-777' },
        { id:4, name: "Svetlana Bisacki", email: 'svetlana@gmail.com', number: '555-666' }
      ]
    }
  },
  computed: {
    routeContact(){
      return this.contacts.find(contact=>contact.id == this.$route.params.id)
    }
  }

  }

</script>

<style>

</style>


