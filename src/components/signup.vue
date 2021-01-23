<template>
 <div class="container">
   <form @submit.prevent="handleSubmit">
     <input type="text" required v-model="displayName" placeholder="Enter Your displayName">
     <input type="email" required v-model="email" placeholder="Enter Your Email">
     <input type="password" required v-model="password" placeholder="Enter Yourpassword">
     <div class="error">{{ error }}</div>
     <button>Sign Up</button>
   </form>
 </div>
</template>

<script>
import { ref } from 'vue'
import usingSignup from '../composoble/usingSignup'

export default {
  setup(props,context){
    const { error,signup }=usingSignup()
    const displayName =ref('')
    const email =ref('')
    const password =ref('')

    const handleSubmit = async() =>{
      await signup(email.value , password.value , displayName.value)
     // console.log('user sign up')
      if(!error.value){
       // console.log('User login')
        context.emit('emitSignUp')
      }
    }

    return{displayName,email,password , handleSubmit , error}
  }
  
}
</script>

<style>

</style>