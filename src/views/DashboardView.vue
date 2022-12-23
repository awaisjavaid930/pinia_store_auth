<template>
    <div class="container mx-auto p-4">

        <div class="grid grid-cols-6 gap-3">
            <div class="col-span-1" v-for="item in items" :key="item">
                <img class="w-full" :src="base_url + '' + item.image.url" :alt="item.image.name"
                    style="height: 100px; width: 100px;" @click="getRecords(item.id)">

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"> {{ item.name }} </div>
                </div>
            </div>
        </div>

        <div>
            <div class="col-span-2" v-for="product in products" :key="product">
                <div v-for="image in product.images" :key="image">
                    <img :src="base_url + image.url" alt="" srcset="" style="width: 50px; height: 50px;">
                </div>
                {{ product.name }}
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
            products: [],
            base_url: ''
        }
    },
    methods: {
        getItem() {
            let userAuth = userAuthStore();
            this.base_url = process.env.VUE_APP_IMAGE_URL
            userAuth.getItem('admin/category')
                .then(response => {
                    this.items = response.data;
                    this.products = this.items[0].products;
                    console.log(this.products)
                });
        },
        getRecords(id) {
            this.products = this.items[id].products;
        }
    },
    mounted() {
        return this.getItem();
    }
}
</script>