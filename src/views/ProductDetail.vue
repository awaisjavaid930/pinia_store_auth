<template>
    <div>
        <div class="max-w-sm w-full ">
            <div v-for="image in images" :key="image">
                <figure>
                    <img :src="base_url + image.url" :alt="image.name">
                </figure>
            </div>
            <div
                class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">{{ data.name }} ({{ data.quantity }}) </div>
                    <p class="text-gray-700 text-base"> {{ data.description }}</p>

                    <table class="table-auto">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">ID</th>
                                <th class="px-4 py-2">Amount</th>
                                <th class="px-4 py-2">Username</th>
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

                <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{{ data.location }}</p>
                        <p class="text-gray-600">{{ data.end_time }} {{ data.year }}</p>
                    </div>
                </div>
            </div>
        </div>
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
                    console.log(this.data)
                    this.bids = response.data.bids;
                    this.images = response.data.images;
                })
        }
    },
    mounted() {
        return this.getProductDetail();
    }
}
</script>