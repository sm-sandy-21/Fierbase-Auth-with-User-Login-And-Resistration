<template>
  <div class="welcome container">
      Welcome
      <div v-if="showlogin">
        <h2>Login</h2>
          <login @emitlogin="enterChat"/>
          <p>No account yet ? <span @click="showlogin = false">Sign-Up</span> for account</p>
      </div>
      <div v-else>
        <h2>Sign Up</h2>
          <signup @emitSignUp="enterChat"/>
           <p>Already hava a account ? <span @click="showlogin = true">log-In</span> to your account</p>
      </div>        
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/login.vue'
import signup from '../components/signup.vue'
import { useRouter } from 'vue-router'

export default {
  components: { signup, Login },
  setup(){
    const showlogin = ref(true)
    const router = useRouter()

    const enterChat = () =>{
        router.push({ name:'chatroom'})
    } 

    return{showlogin , enterChat}
  }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
.welcome form{
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input{
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #999;
  outline: none;
  color: rgb(65, 64, 64);
  margin: 10px auto;
  margin-top: 20px;
}

span{
  
  cursor: pointer;
  font-weight: bold;
}

</style>