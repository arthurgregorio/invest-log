<template>
  <page-structure>
    <div class="columns">
      <operations-menu />
      <nuxt />
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import PageStructure from '@/components/utilities/PageStructure.vue'
import OperationsMenu from '@/components/menu/OperationsMenu.vue'

export default Vue.extend({
  name: 'operations-layout' as string,
  components: {
    PageStructure,
    OperationsMenu
  }
})
</script>
