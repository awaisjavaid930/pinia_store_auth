<template>
    <div class="container mx-auto px-4 ">
        <br /> <br />

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addBid">Add
            Bid
        </button>
        <br /><br />
        <div class="max-w-sm rounded overflow-hidden shadow-lg float-left mx-2">
            <div class="inline" v-for="image in images" :key="image">
                <img class="inline" style="width: 30%;" :src="base_url + image.url" :alt="image.name">
            </div>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ data.name }} ({{ data.quantity }}) </div>
                <p class="text-gray-700 text-base">
                    {{ data.description }}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#
                    {{ data.end_time }} </span>
                <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#
                    {{ data.year }}</span>
            </div>
        </div>
        <table class="border-collapse border-2 table-fixed">
            <thead>
                <tr>
                    <th class="w-1/2 px-4 py-2 border border-gray-400">Title</th>
                    <th class="w-1/4 px-4 py-2 border border-gray-400">Author</th>
                    <th class="w-1/4 px-4 py-2 border border-gray-400">Views</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bid in bids" :key="bid">
                    <td class="border px-4 py-2">{{ bid.id }}</td>
                    <td class="border px-4 py-2">{{ bid.amount }}</td>
                    <td class="border px-4 py-2">{{ bid.user.username }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { userAuthStore } from '@/store/user';
export default {
    name: "ProductDetail",
    data() {
        return {
            data: '',
            bids: [],
            images: [],
            base_url: process.env.VUE_APP_IMAGE_URL

        }
    },
    methods:
    {
        getProductDetail() {
            let userAuth = userAuthStore();
            userAuth.getItem('admin/product/' + this.$route.params.id)
                .then(response => {
                    this.data = response.data;
                    this.bids = response.data.bids;
                    this.images = response.data.images;
                })
        },
        addBid() {
            let data = {
                bid_amount: Math.ceil(Math.random()*10) ,
                product_id: this.$route.params.id
            }
            let userAuth = userAuthStore();
            userAuth.saveItem('buyer/store/bid', data)
                .then(response => {
                    console.log(response.status)
                    if (response.status == 200) {
                        this.getProductDetail();
                    }
                })
        }
    },
    mounted() {
        return this.getProductDetail();
    }
}
</script>