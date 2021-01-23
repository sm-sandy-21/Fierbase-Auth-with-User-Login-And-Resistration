<template>
 <div class="container">
   <form @submit.prevent="handleFrom">
    
     <input type="email" required v-model="email" placeholder="Enter Your Email">
     <input type="password" required v-model="password" placeholder="Enter Yourpassword">
     <div class="error">{{ error }}</div>
     <button>Login</button>
   </form>
 </div>
</template>

<script>
import { ref } from 'vue'
import uselogin from '@/composoble/uselogin'


export default {
  setup(props , context){
    const{ error,login } = uselogin() 

   
    const email =ref('')
    const password =ref('')

    const handleFrom = async() =>{
      await login(email.value,password.value )
      if(!error.value){
       // console.log('User login')
        context.emit('emitlogin')
      }
    }

    return{email,password , handleFrom , error}
  }
  
}
</script>

<style>

</style>