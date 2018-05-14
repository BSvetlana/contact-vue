<template>
  <div>
    <div class="list-group">
        <h2 class="text-center">Contact List</h2>
        <ul class="list-group">
            <router-link class="list-group-item list-group-item-success"
                tag="button"
                :to="{name: 'contact-details', params: {id: contact.id}}"
                exact-active-class="active"
                v-for="(contact,key) in contacts"
                :key="key">
                <b>{{contact.first_name}}</b>
                <button style="float: right" class="btn btn-outline-danger cusstom" @click="deleteContact(contact.id)">Delete</button>
                  
                <router-link  :to="{ name: 'add-contact', params: { id: contact.id } }"> <button style="float: right" class="btn btn-outline-success cusstom">Edit</button> </router-link>               
            </router-link>                 

        </ul>
    </div>
  </div>
</template>

<script>
import { contact } from '../services/ContactService'

export default {
  props: ["contacts"],
  methods: {

    deleteContact(id) {
      contact.delete(id)
        .then((response) => {
          this.$emit('contactDelete',id)
        })
    }
  }

  }

</script>

<style>
.list-group-item {
  background-color: skyblue;
}

.cusstom {
  width: 68px !important;
  
}
</style>