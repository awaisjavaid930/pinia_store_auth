<template>
    <div class="hello">
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Loadigo</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <router-link v-for="link in links" :key="link" :to="link.link" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                        {{  link.title }}
                    </router-link>
                    <!-- <button v-if="token != 'null'" @click="signout" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                        SIGN OUT
                    </button> -->
                </div>
            </div>
        </nav>
        <router-view />
        
    </div>
</template>

<script>

export default {
    name: 'NavbarView',
    data() {
        return {
            token : localStorage.getItem('token'),
            links : 
            [
                {
                    title : 'Home',
                    link : '/signin'
                },
                {
                    title : 'Dashboard',
                    link : '/dashboard'
                },
                {
                    title : 'SIGN IN',
                    link : '/signin'
                },
                {
                    title : 'SIGN UP',
                    link : '/signup'
                },
            ],
            logOutItems : 
            [
                {
                    title : 'Home',
                    link : '/signin'
                },
                {
                    title : 'SIGN IN',
                    link : '/signin'
                },
                {
                    title : 'SIGN UP',
                    link : '/signup'
                },
            ],
        }
    },
    methods: {
        signout()
        {
            localStorage.setItem('token',null)
            this.links = [];
            this.$nextTick(() => {
                this.links = this.logOutItems
            });
            this.$router.push('/signin')
        }
    },
}
</script>
