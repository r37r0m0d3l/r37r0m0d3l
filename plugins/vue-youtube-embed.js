import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
if (process.client) {
  Vue.use(VueYouTubeEmbed, { global: true })
}
