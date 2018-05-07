<template>
  <div>
      <h2 class="text-center">Contact Details</h2>
      
  <div class="card">
      <ul class="list-group" v-if="contact">
        <li class="list-group-item list-group-item-success"><i class="fas fa-user fa-fw"></i> {{ contact.name }}</li>
        <li class="list-group-item list-group-item-success"><i class="fas fa-envelope fa-fw"></i> {{ contact.email }}</li>
        <li class="list-group-item list-group-item-success"><i class="fas fa-phone fa-fw"></i> {{ contact.number }}</li>
      </ul>
      <div class="card-body" v-else>
        &larr; Please select a contact you want to see or click <router-link to="/add-contact">here</router-link> to create a new contact.
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['contact'],

  }

</script>

<style>

</style>

