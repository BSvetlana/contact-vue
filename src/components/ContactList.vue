<template>
  <div>
    <div class="list-group">
        <ul class="list-group">
            <li class="list-group-item list-group-item-success"
                v-for="(contact,key) in contacts"
                :key="key"><a href="#" style="color:#00796B; text-decoration: none"><b>{{contact.name}}</b></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contacts"]
};
</script>

<style>

</style>