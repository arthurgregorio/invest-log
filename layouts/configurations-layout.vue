<template>
  <page-structure>
    <div class="columns">
      <configurations-menu />
      <nuxt />
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import PageStructure from '@/components/utilities/PageStructure.vue'
import ConfigurationsMenu from '@/components/menu/ConfigurationsMenu.vue'

export default Vue.extend({
  name: 'configurations-layout' as string,
  components: {
    PageStructure,
    ConfigurationsMenu
  }
})
</script>
