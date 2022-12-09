import { defineStore } from "pinia";
import axios from 'axios';

export const userAuthStore = defineStore('userAuth', {
    
    state: () => {
        return {
            token : null
        }
    },

    actions: {
        async userSignUp(data)
        {
            return await axios.post(process.env.VUE_APP_API_URL + 'api/register', data)
                .then(response => {
                    return  Promise.resolve(response);
                })
                .catch(error => {
                    console.log(error)
                })
            
        },

        userSignIn()
        {
            console.log("User Sign In")
        }
    }
})