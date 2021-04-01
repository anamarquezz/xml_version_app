<template>
  <div class="first-bar">
      <div class="company">        
          <h1>NETGEAR </h1>        
      </div>
      <div class="user-info">
          <h4>Ana Marquez </h4>  
          <div class="user-icon">           
            <v-icon x-medium>fas fa-user</v-icon>         
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'user-navigation',
    components: {

    }
  }
</script>
<style scope>
  @import "../../assets/css/userNavigation.css";
.diiv{   
    display: flex;
    flex-direction: column;
    align-content: space-between;    
}

</style>