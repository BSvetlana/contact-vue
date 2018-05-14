<template>
  <div>
    <div class="container">
      <div class="col-8">
            <h2 class="text-center">Contact Form</h2>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input v-focus-on type="text" class="form-control" id="first_name" placeholder="Enter First Name" v-model="newContact.first_name">
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" id="last_name" placeholder="Enter Last Name" v-model="newContact.last_name">
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="newContact.email">
                </div>
                <div class="form-group">
                    <label for="number">Number</label>
                    <input type="text" class="form-control" id="number" placeholder="Enter number" v-model="newContact.number">
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>

        </div>
  </div>
  </div> 
</template>

<script>
import { contact } from '../services/ContactService'

export default {
  data() {
    return {
      newContact: {
        first_name: '',
        last_name: '',
        email: '',
        number: ''
      },
      focus: false
      
    }
  },
  created() {
    if(this.$route.params.id) {
      contact.get(this.$route.params.id)
        .then((response) => {
          this.newContact = response.data
        })
    }
  },
  methods: {
    onSubmit() {
      this.$route.params.id ? this.editContact() : this.addContact()
    },
    editContact() {
      contact.edit(this.newContact)
        .then(() => {
          this.$router.push('/contacts')
        })
    },
    addContact() {
      contacts.add(this.newContact) 
        .then(() => {
          this.$router.push('/contacts')
        })
    }
  }

};
</script>

<style>

</style>