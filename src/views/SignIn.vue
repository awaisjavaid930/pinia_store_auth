<template>
    <div class="container mx-auto m-5">
        <a href="#" class="no-underline text-center text-2xl">Authentication Using Vue, Pinia, and Tailwind CSS</a> <br /><br /> 
        <form class="w-full max-w-sm " @submit.prevent="login">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-full-name">Email</label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name" type="text" v-model="formData.email" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        for="inline-password">Password</label>
                </div>
                <div class="md:w-2/3">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password" type="password" v-model="formData.password" />
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                    <button
                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">Sign In</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { userAuthStore } from "@/store/user";
export default {
    name: "SignIn",
    data() {
        return {
            formData: {
                email: "awaisjavaid980@gmail.com",
                password: "password"
            }
        };
    },
    methods: {
        async login() {
            let userAuth = await userAuthStore();
            userAuth.userSignIn(this.formData).then(response => {
                if (response.status == 200) {
                    localStorage.setItem("token", response.data.token);
                    this.$router.push("/about");
                }
            });
        }
    }
};
</script>