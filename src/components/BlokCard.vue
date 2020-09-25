<template>
    <div v-editable="card" class="card">
        <div class="img-card">
            <img :src="card.image.filename" :alt="card.title">
        </div>
        <p>{{ card.title }}</p>
    </div>
</template>

<script>
export default {
    name: "BlokCard",
    props: {
        card: Object,
        required: true
    }
}
</script>

<style scoped>
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
</style>