<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: skyblue;">
        <router-link to="contacts" class="navbar-brand" href="#" style="color:#424242;"><b>My Contacts</b></router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"  >
                    <router-link to="/contacts" class="nav-link" href="#" style="color:#424242;"><b>Contacts</b><span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/add-contact" class="nav-link" href="#" style="color:#424242;"><b>Add Contact</b><span class="sr-only">(current)</span></router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>

</style>


