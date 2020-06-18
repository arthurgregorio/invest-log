<template>
  <page-structure>
    <div class="columns">
      <operations-menu />
      <main class="column">
        <!-- TODO -->
      </main>
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import OperationsMenu from '@/components/menu/OperationsMenu.vue'

export default Vue.extend({
  name: 'operations-index' as string,
  layout: 'internal-layout',
  components: {
    OperationsMenu
  }
})
</script>
