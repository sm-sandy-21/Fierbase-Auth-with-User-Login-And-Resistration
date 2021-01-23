import { ref } from "vue"
import {projectAuth} from '../firebase/config'
import router from "../router"

const error =ref(null)

const logout = async() =>{
   error.value = null
   try {
       await projectAuth.signOut()
       router.push({name : 'welcome'})
       
   } catch (err) {
       console.log(err.message)
       error.value = err.message
       
   }
}




const useLogout = () =>{
   
    return{ logout,error }

}
export default useLogout