<template>
    <footer :style="`background:${blok.background}`">
        <p :style="`color:${blok.color}`" :class="blok.class">{{ blok.title }}</p>
    </footer>
</template>

<script>
export default {
    name: "BlokFooter",
    props: {
        blok: Object,
        required: true
    }
}
</script>

<style scoped>
footer {
    background: #000;
    padding: 10px 0;
}
.font-600 {
    font-weight: 600;
}
.text-md {
    font-size: 1rem;
}
</style>