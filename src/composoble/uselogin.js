import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error =ref(null)

const login = async(email,password) =>{
  
    error.value = null
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        if (!res) {
            throw new Error('Email or Password is Wrong')
        }
       
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        
    }

}




const uselogin = () =>{
    return{
        login,error
    }

}
export default uselogin