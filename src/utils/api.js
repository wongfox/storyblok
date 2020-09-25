// 1. Require the Storyblok client
import StoryblokClient from 'storyblok-js-client'

// 2. Initialize the client with the preview token so we can access our API easily
// from your space dashboard at https://app.storyblok.com
const storyapi = new StoryblokClient({
    accessToken: process.env.VUE_APP_TOKEN
})

export default storyapi