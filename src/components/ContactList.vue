<template>
  <div>
    <div class="list-group">
        <h2 class="text-center">Contact List</h2>
        <ul class="list-group">
            <router-link class="list-group-item list-group-item-success"
                tag="button"
                :to="{name: 'contact-details', params: {id: contact.id}}"
                
                v-for="(contact,key) in contacts"
                :key="key">
                <b>{{contact.name}}</b>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: ["contacts"],

  }

</script>

<style>

</style>