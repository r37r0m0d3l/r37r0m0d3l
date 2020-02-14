<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon :color="item.color" x-large>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo darken-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Anton Trofimenko</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="fill-heightZ" fluid>
        <v-row align="center" justify="center">
          <nuxt />
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo darken-4" app>
      <span class="white--text">&copy; 2012-2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import colors from 'vuetify/es5/util/colors'

export default {
  props: {
    source: {
      default: '',
      type: String
    }
  },
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: true,
    miniVariant: false,
    title: 'R37R0M0D3L',
    transition: 'default',
    items: [
      {
        color: colors.orange.darken2,
        icon: 'mdi-home',
        title: 'Home',
        to: '/'
      },
      {
        color: colors.blue.darken2,
        icon: 'mdi-contacts',
        title: 'Contact',
        to: 'contact'
      },
      {
        color: colors.purple.darken2,
        icon: 'mdi-timeline',
        title: 'Workplaces',
        to: '/workplaces'
      },
      {
        color: colors.red.darken2,
        icon: 'mdi-open-source-initiative',
        title: 'Contributions',
        to: '/contributions'
      },
      {
        color: colors.teal.darken2,
        icon: 'mdi-laptop',
        title: 'Experience',
        to: '/experience'
      },
      {
        color: colors.pink.darken2,
        icon: 'mdi-newspaper',
        title: 'Publications',
        to: '/publications'
      },
      {
        color: colors.deepOrange.darken2,
        icon: 'mdi-account-circle',
        title: 'Information',
        to: '/information'
      }
    ]
  })
}
</script>
