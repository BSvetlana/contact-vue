<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-4">
                  <ContactList :contacts = 'contacts'/>
              </div>
              <div class="col-8">
                  <ContactDetails/>
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
    ContactDetails
  },
  data() {
    return {
      contacts: [
        { name: "Branko" },
        { name: "Marina" },
        { name: "Sasa" },
        { name: "Svetlana" }
      ]
    };
  }
};
</script>

<style>

</style>


