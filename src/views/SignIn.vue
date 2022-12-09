<template>
    <div>
        <form action="" @submit.prevent="login">
            <input type="email" placeholder="enter your email" v-model="formData.email"  /> <br /> <br />
            <input type="text" placeholder="enter your password" v-model="formData.password" /> <br /> <br />
            <button type="submit"> Login </button>
        </form>
    </div>
</template>
<script>
import { userAuthStore } from '@/store/user';
export default {
    name : "SignIn",
    data() {
        return {
            formData : {
                email : 'awaisjavaid980@gmail.com',
                password : 'password'
            }
        }
    },
    methods: {
        async login()
        {
            let userAuth = await userAuthStore();
             userAuth.userSignIn(this.formData)
                .then(response => {
                    if (response.status == 200) {
                        localStorage.setItem('token' , response.data.token)
                        this.$router.push('/about')
                    }
                })
        
        }
    },
}
</script>