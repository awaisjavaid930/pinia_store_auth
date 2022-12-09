import { defineStore } from "pinia";
import axios from 'axios';

export const userAuthStore = defineStore('userAuth', {
    
    state: () => {
        return {
            user : null, 
            token: null
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

        userSignIn(data)
        {
            return axios.post(process.env.VUE_APP_API_URL + 'api/login', data)
                .then(response => {
                    this.token = response.data.data.token;
                    this.isLoggedIn = true;
                    return Promise.resolve(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
})