<template>
  <page-structure>
    <div class="columns">
      <configurations-menu />
      <main class="column">
        <!-- TODO -->
      </main>
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import ConfigurationsMenu from '@/components/menu/ConfigurationsMenu.vue'

export default Vue.extend({
  name: 'configurations-index' as string,
  layout: 'internal-layout',
  components: {
    ConfigurationsMenu
  }
})
</script>
