<template>
  <header class="hero is-dark">
    <div class="hero-head">
      <nav class="navbar">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            <span class="logo">Invest</span>
            <span class="logo-thin">Log</span>
          </a>
          <a class="navbar-item is-hidden-desktop" />
          <a class="navbar-item is-hidden-desktop" />
          <div class="navbar-burger burger" data-target="main-menu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="main-menu" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link class="navbar-item" :to="localePath({ name: 'dashboards' })">
              {{ $t('main-menu.items.dashboards') }}
            </nuxt-link>
            <nuxt-link class="navbar-item" :to="localePath({ name: 'operations' })">
              {{ $t('main-menu.items.operations') }}
            </nuxt-link>
            <nuxt-link class="navbar-item" :to="localePath({ name: 'configurations' })">
              {{ $t('main-menu.items.configurations') }}
            </nuxt-link>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <user-menu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import UserMenu from './UserMenu.vue'

export default Vue.extend({
  name: 'main-menu' as string,
  components: {
    UserMenu
  }
})
</script>
