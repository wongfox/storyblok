<template>
    <section v-editable="blok" class="main">
        <div class="container">
            <h5 class="text-title">{{ blok.title }}</h5>
            <input type="text" class="buscador" :placeholder="blok.searchText" v-model="busqueda">
            <br><br>

            <template v-for="item in cachorros">
                <component :is="require(`@/components/${item.component}`).default"
                           :key="item._uid"
                           :card="item">
                </component>
            </template>
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
.text-title {
    font-size: 20px;
    font-weight: 500;
}
.buscador {
    width: 30%;
    padding: 5px;
}
</style>