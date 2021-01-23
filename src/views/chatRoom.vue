<template>
<div class="container0">
    <navbar />
</div>
  
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    components:{Navbar}

}
</script>

<style>
.container0{
    width: 95%;
    max-width: 950px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px rgb(37, 37, 37);
    background: white;
   
}

</style>