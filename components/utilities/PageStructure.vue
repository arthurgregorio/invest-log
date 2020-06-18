<template>
  <div>
    <main-menu />
    <div id="content" class="section">
      <slot />
    </div>
    <error-handler />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MainMenu from '@/components/menu/MainMenu.vue'
import ErrorHandler from '@/components/utilities/ErrorHandler.vue'

export default Vue.extend({
  name: 'page-structure' as string,
  components: {
    MainMenu,
    ErrorHandler
  }
})
</script>
