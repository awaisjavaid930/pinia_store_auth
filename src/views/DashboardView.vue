<template>
    <div class="container mx-auto p-4">
        <button @click="changeRoute('/add/product')"
            class="mb-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Add Product
        </button>
        <div class="grid grid-cols-3 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg row-span-4" v-for="(item,key) in items" :key="key">
                <img class="inline p-1" :src="base_url + '' + item.image.url" :alt="item.image.name"
                    @click="getRecords(item.id)" width="80">
                <div class="px-6 py-4 inline-block">
                    <div class="font-bold text-xl mb-2" @click="getRecords(item.id)">{{ item.name }}</div>
                </div>
                <button
                    class="float-right mt-7 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    {{ item.products.length }}
                </button>
            </div>
        </div>
        <div v-if="products.length == 0"
            class="my-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">We are sorry! </strong>
            <span class="block sm:inline">Not Items Found.</span>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg" v-for="product in products" :key="product"
                @click="changeRoute('/product/detail/' + product.id)">
                <span v-for="image in product.images" :key="image">
                    <img class="inline" style="width: 33%;" :src="base_url + '' + image.url" :alt="image.name">
                </span>

                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ product.name }}</div>
                    <p class="text-gray-700 text-base" @click="changeRoute('/product/detail/' + product.id)">
                        {{ product.description }}
                    </p>
                </div>

                <table class="table-auto" v-if="product.bids.length > 0">
                    <thead>
                        <tr>
                            <th class="border px-4 py-2">ID</th>
                            <th class="border px-4 py-2">Amount</th>
                            <th class="border px-4 py-2">Username</th>
                            <th class="border px-4 py-2">Won</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bid in product.bids" :key="bid">
                               
                            <td class="border px-4 py-2">{{ bid.id }}</td>
                            <td class="border px-4 py-2">{{ bid.amount }}</td>
                            <td class="border px-4 py-2">{{ bid.user.username }}</td>
                            <td class="border px-4 py-2">{{ (bid.is_won) ? 'Yes' : 'No' }}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="px-6 pt-4 pb-2">
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{{ product.price + ' PKR' }}
                    </span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{{ product.location }}
                    </span>
                    <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #{{ product.year }}
                    </span>
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
            products: [],
            base_url: '',
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
                });
        },
        getRecords(id) {
            id = id - 1;
            this.products = this.items[id].products;
        },
        changeRoute(url) {
            this.$router.push(url)
        }
    },
    mounted() {
        return this.getItem();
    }
}
</script>