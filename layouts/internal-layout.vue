<template>
  <div>
    <main-menu />
    <div id="content" class="section">
      <nuxt />
    </div>
    <error-handler />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MainMenu from '@/components/menu/MainMenu.vue'
import ErrorHandler from '@/components/utilities/ErrorHandler.vue'

export default Vue.extend({
  name: 'internal-layout' as string,
  components: {
    MainMenu,
    ErrorHandler
  }
})
</script>
