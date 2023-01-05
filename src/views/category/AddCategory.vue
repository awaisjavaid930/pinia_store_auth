<template>
    <div class="container mx-auto p-4">
        <form class="w-full max-w-lg" @submit.prevent="saveCategory">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Category
                    </label>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        Name
                    </label>
                    <input v-model="formData.name"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="name">
                </div>
            </div>

            <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    File
                </label>
                <input type="file" class="file:border file:border-solid" @change="uploadImage" />
            </div>
            
            <div class="w-full md:w-1/2 px-3 my-4">
                <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                value="Submit">
            </div>
            
        </form>
    </div>
</template>
<script>
import { userAuthStore } from '@/store/user'
export default {
    name: 'AddCategory',
    data() {
        return {
            formData: {
                name: '',
                image: ''
            }
        }
    },
    methods: {
        uploadImage(e) {
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = e => {
                this.formData.image = e.target.result.replace('data:image/jpeg;base64,', '')
            }
        },
        saveCategory() {
            let userAuth = userAuthStore();
            userAuth.saveItem('admin/category', this.formData)
                .then(response => {
                    if (response.status == 200) {
                        this.$router.push('/dashboard')
                    }
                })
        }

    },
}
</script>