<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #00796B;">
        <a class="navbar-brand" href="#" style="color:white;"><b>My Contacts</b></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"  >
                    <router-link to="contacts" class="nav-link" href="#" style="color:white;"><b>Contacts</b><span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link to="add-contact" class="nav-link" href="#" style="color:white;"><b>Add Contact</b><span class="sr-only">(current)</span></router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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


