<template>
    <section class="main">
        <div class="container">
            <h5 class="text-title">{{ blok.title }}</h5>
            <input type="text" class="buscador" :placeholder="blok.searchText" v-model="busqueda">
            <br><br>

            <div class="card" v-for="(item, index) in cachorros" :key="index">
                <div class="img-card">
                    <img :src="item.image.filename" :alt="item.title">
                </div>
                <p>{{ item.title }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "BlokContent",
    data: () => ({
        busqueda: ''
    }),
    props: {
        blok: Object,
        required: true
    },
    computed: {
        cachorros() {
            return this.blok.card.filter((card) => card.title.includes(this.busqueda));
        }
    }
}
</script>

<style scoped>
section.main {
    min-height: 100px;
}
div.container {
    width: 1200px;
    margin: 50px auto;
}
div.card {
    display: inline-block;
    vertical-align: top;
    min-height: 100px;
    width: 22%;
    margin: 5px;
    border: 1px solid #cecece;
    padding: 10px;
    border-radius: 5px;
}
.img-card img {
    width: 100%;
}
.text-title {
    font-size: 20px;
    font-weight: 500;
}
.buscador {
    width: 30%;
    padding: 5px;
}
</style>