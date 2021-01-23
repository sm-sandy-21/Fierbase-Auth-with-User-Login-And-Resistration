<template>
   <nav v-if="user">
     <div class="conatiner0">
       <p class="user">Hey ..{{ user.displayName }} </p>
       <p class="email">Currently loged in as : {{ user.email }}</p>
     </div>
     <button @click="handleLogout">Logout</button>
   </nav>
  
</template>

<script>
import useLogout from '@/composoble/useLogout'
import getUser from '@/composoble/getUser'

export default {
  setup(){
    const {logout,error} = useLogout()
      const{user} = getUser()
    
    const handleLogout =async() =>{
         await logout()
         if(!error.value){
             console.log('User Logout')
         }
           
     }

    return {handleLogout , user}
  }

}
</script>

<style>
nav{
    padding: 20px;
    border-radius: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p.user{
  font-weight: bold;
  color: rgb(83, 120, 122);
}
nav p {
    margin: 20px auto;
    font-size: 16px;
    color: #999;
    
}
nav p.email {
    font-size: 14px;
    color: #999;
} 


</style>