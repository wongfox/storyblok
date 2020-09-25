<template>
    <header v-editable="blok" :style="`background:${blok.backgroundColor}`">
        <nav>
            <h3 :style="`color:${blok.color}`">{{ blok.title }}</h3>
        </nav>
    </header>
</template>

<script>
export default {
    name: "BlokHeader",
    props: {
        blok: Object,
        required: true
    }
}
</script>

<style scoped>
header {
    padding: 10px 0;
}
</style>