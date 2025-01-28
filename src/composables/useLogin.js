import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const Login = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)

    if (!res) {
      throw new Error('could not Login!')
    }

    error.value = null
    return res
  } catch(err) {
    console.log(err.message)
    error.value = 'Incorrect Login Credentials'
  }
}

const useLogin = () => {
  return { error, Login }
}

export default useLogin