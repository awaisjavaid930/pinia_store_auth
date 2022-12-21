<template>
    <div class="container mx-auto p-4">
        <div class="max-w-sm rounded overflow-hidden shadow-lg inline-block p-5" v-for="item in items" :key="item">
            <img class="w-full" :src="base_url+''+item.image.url" :alt="item.image.name" style="height: 100px; width: 100px;">
            
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> {{ item.name }} </div>
            </div>
                
            <div v-for="product in item.products" :key="product">
                <div>
                    <div class="border" v-for="image in product.images" :key="image">
                        <img :src="base_url+image.url" alt="" srcset="" style="height: 50px; width: 50px;">
                        <p class="text-right">
                            {{  product.name }}
                        </p> 
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { userAuthStore } from '@/store/user';
export default {
    name: 'dashboardView',
    data() {
        return {
            items: [],
            base_url : ''
        }
    },
    methods: {
        getItem() {
            let userAuth = userAuthStore();
            this.base_url = process.env.VUE_APP_IMAGE_URL
            userAuth.getItem('admin/category')
                .then(response => {
                    this.items = response.data;
                });
        }
    },
    mounted() {
        return this.getItem();
    }
}
</script>