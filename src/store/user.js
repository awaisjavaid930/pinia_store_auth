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
                    return Promise.resolve(response);
                })
                .catch(error => {
                    console.log(error)
                })
            
        },

        userSignIn(data)
        {
            return axios.post(process.env.VUE_APP_API_URL + 'api/login', data)
                .then(response => {
                    if (response.data.status == 422) {
                        let data ={ "status": response.data.status , "message": response.data.message  };
                        return Promise.resolve(data);
                    } else {
                        this.token = response.data.data.token;
                        this.isLoggedIn = true;
                        return Promise.resolve(response.data);   
                    }
                })
        },
        
        async getItem(url) {
            return axios.get(process.env.VUE_APP_API_URL + 'api/'+ url , {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    } 
                })
                .then(response => {
                    return Promise.resolve(response.data);
                })
                .catch(err => {
                    return Promise.resolve(err);
                    
                })
        },
        
        async saveItem(url, data) {
            return axios.post(process.env.VUE_APP_API_URL + 'api/'+ url  , data ,{
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                } 
            })
            .then(response => {
                return Promise.resolve(response);
            })
        }
    }
})