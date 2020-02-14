<template>
  <v-layout row justify-center align-center>
    <v-flex xs12 sm8 md6 class="text-center">
      <v-card class="mx-auto">
        <v-card-title class="headline flex text-center justify-center">
          <h2 class="text-no-wrap">Anton</h2>
          <h2>&nbsp;</h2>
          <h2 class="text-no-wrap">Trofimenko</h2>
        </v-card-title>
        <v-card-text>
          <v-spacer />
          <p>
            <v-avatar size="256">
              <img src="images/avatar.png" alt="" />
            </v-avatar>
          </p>
          <v-spacer />
          <p>
            Web Developer. 🇺🇦 Ukraine, Kharkiv
          </p>
          <v-spacer />
          <blockquote class="blockquote text-wrap black--text">
            Jack of all trades, master of none, though oftentimes better than
            master of one.
          </blockquote>
          <v-spacer />
          <p>
            <v-chip-group column>
              <v-chip
                v-for="(item, index) in items"
                :key="index"
                color="white black--text"
                label
              >
                <v-avatar left>
                  <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-avatar>
                {{ item.text }}
              </v-chip>
            </v-chip-group>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import colors from 'vuetify/es5/util/colors'
export default {
  components: {},
  data() {
    return {
      items: [
        { text: 'Bootstrap', icon: 'mdi-bootstrap', color: '#7952B3' },
        { text: 'Bulma', icon: 'mdi-bulma', color: '#00D1B2' },
        { text: 'CSS', icon: 'mdi-language-css3', color: '#E2DEDF' },
        { text: 'DevOps', icon: 'mdi-azure-devops', color: '#0078D4' },
        { text: 'Docker', icon: 'mdi-docker', color: '#379FEE' },
        { text: 'Drupal', icon: 'mdi-drupal', color: '#0B6FAA' },
        { text: 'GNU/Linux', icon: 'mdi-linux', color: '#F2E25A' },
        { text: 'Git', icon: 'mdi-git', color: '#F64D27' },
        { text: 'GoLang', icon: 'mdi-language-go', color: '#50B9DD' },
        { text: 'HTML5', icon: 'mdi-language-html5', color: '#F16529' },
        {
          text: 'JavaScript',
          icon: 'mdi-language-javascript',
          color: '#F7DF1E'
        },
        { text: 'Laravel', icon: 'mdi-laravel', color: '#FF2D20' },
        { text: 'MacOS', icon: 'mdi-desktop-mac', color: '#4D66CC' },
        { text: 'Markdown', icon: 'mdi-markdown', color: '#000000' },
        { text: 'NPM', icon: 'mdi-npm', color: '#C53635' },
        { text: 'Node', icon: 'mdi-nodejs', color: '#7CB701' },
        { text: 'Nuxt', icon: 'mdi-nuxt', color: '#48BA8A' },
        { text: 'PHP', icon: 'mdi-language-php', color: '#6A6BAB' },
        { text: 'Python', icon: 'mdi-language-python', color: '#FFD542' },
        { text: 'RabbitMQ', icon: 'mdi-rabbit', color: '#FF6600' },
        { text: 'Sass', icon: 'mdi-sass', color: '#CE679A' },
        {
          text: 'TypeScript',
          icon: 'mdi-language-typescript',
          color: '#0076C6'
        },
        { text: 'Vue', icon: 'mdi-vuejs', color: '#3FB27F' },
        { text: 'Windows', icon: 'mdi-windows', color: '#00A8E8' },
        { text: 'Zend', icon: 'mdi-zend', color: '#65AF03' },
        { text: 'jQuery', icon: 'mdi-jquery', color: '#1A71B5' }
      ]
    }
  }
}
</script>
