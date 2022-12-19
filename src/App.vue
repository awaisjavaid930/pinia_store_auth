<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Loadigo</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
    
                <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                    Home
                </router-link> 
                <router-link to="/dashboard" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                    Dashboard
                </router-link> 
                <router-link to="/signup" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                    Sign Up
                </router-link> 
                <router-link to="/signin" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-2">
                    Sign In
                </router-link> 
            </div>
        </div>
    </nav>
    <router-view />
</template>

