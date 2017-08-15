<template>
  <v-app light>
    <v-navigation-drawer v-model="sideNav" temporary>
      <v-list>
        <v-list-tile 
        v-for="item in menuItems" 
        :key="item.title"
        router
        :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icons}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark>
        <v-toolbar-side-icon 
        @click.stop="sideNav = !sideNav" 
        class="hidden-md-and-up"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursos : pointer">
            Meetups
          </router-link>
        
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat
          v-for="item in menuItems" :key="item.title"
          router
          :to="item.link">
            <v-icon left>
              {{item.icons}}
            </v-icon>
            {{item.title}}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icons: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icons: 'room', title: 'Organize meetup', link: '/meetup/new'},
          {icons: 'person', title: 'Profile', link: '/profile'},
          {icons: 'face', title: 'Sign up', link: '/signup'},
          {icons: 'lock_open', title: 'sign in', link: '/signin'}
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
