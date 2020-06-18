<template>
  <page-structure>
    <div class="columns">
      <dashboards-menu />
      <main class="column">
        <!-- TODO -->
      </main>
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import DashboardsMenu from '@/components/menu/DashboardsMenu.vue'

export default Vue.extend({
  name: 'dashboards-index' as string,
  layout: 'internal-layout',
  components: {
    DashboardsMenu
  }
})
</script>
