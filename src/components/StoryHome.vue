<template>
    <div>
        <template v-for="item in story.content.body">
            <component :is="require(`@/components/${item.component}`).default"
                       :blok="item"
                       :key="item._uid">
            </component>
        </template>
        <!--<header>
            <nav>
                <h3>Probando CMS StoryBlok con Vue JS</h3>
            </nav>
        </header>
        <section class="main">
            <div class="container">
                <div class="card">
                    card 1
                </div>
                <div class="card">
                    card 2
                </div>
                <div class="card">
                    card 3
                </div>
                <div class="card">
                    card 4
                </div>
                <div class="card">
                    card 5
                </div>
                <div class="card">
                    card 6
                </div>
                <div class="card">
                    card 7
                </div>
                <div class="card">
                    card 8
                </div>
            </div>
        </section>
        <header>
            <nav>
                <h3>Probando CMS StoryBlok con Vue JS</h3>
            </nav>
        </header>-->
    </div>
</template>

<script>
import storyapi from "@/utils/api.js";

export default {
    name: 'StoryHome',
    data: () => ({
        story: {
            content: {
                body: []
            }
        }
    }),
    created () {
        if (window.storyblok) {
            window.storyblok.init({
                accessToken: process.env.VUE_APP_TOKEN
            })
            window.storyblok.on('change', () => {
                this.getStory('home', 'draft')
            })
            window.storyblok.pingEditor(() => {
                if (window.storyblok.isInEditor()) {
                    this.getStory('home', 'draft')
                } else {
                    this.getStory('home', 'published')
                }
            })
        } else {
            this.getStory('home', 'published')
        }
    },
    methods: {
        async getStory(slug, version) {
            const { data } = await storyapi.get('cdn/stories/' + slug, {
                version: version
            })
            this.story = data.story
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
