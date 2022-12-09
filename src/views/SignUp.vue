<template>
    <div>
        <form action="" @submit.prevent="signup">
            <input type="email" placeholder="enter your email" v-model="formData.email" /> <br />  <br /> 
            <input type="text" placeholder="enter your password" v-model="formData.password" /> <br />  <br /> 
            <input type="text" placeholder="enter your Confirmation" v-model="formData.password_confirmation" /> <br />  <br /> 
            <input type="text" placeholder="enter your username" v-model="formData.username" /> <br />  <br /> 
            <input type="text" placeholder="enter your city" v-model="formData.city_id" /> <br />  <br /> 
            <input type="text" placeholder="enter your zip_code" v-model="formData.zip_code" /> <br />  <br /> 
            <input type="text" placeholder="enter your role" v-model="formData.role" /> <br />  <br /> 
            <input type="submit" value="Sign Up" />
        </form>
    </div>
</template>
<script>
import { userAuthStore } from '@/store/user';
export default {
    name : 'SignUp',
    data() {
        return {
            formData : {
                email : 'awaisjavaid980@gmail.com',
                password : 'password',
                password_confirmation : 'password',
                phone_number : '12341234',
                username : 'awais',
                city_id : '1',
                zip_code : '54000',
                role : 'buyer'
            }
        }
    },
    methods: {
        async signup()
        {
            let userAuth = userAuthStore();
            let userRegister = await userAuth.userSignUp(this.formData);
        }
    },
}
</script>