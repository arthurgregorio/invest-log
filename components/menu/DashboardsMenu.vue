<template>
  <aside class="column is-2">
    <b-menu>
      <b-menu-list :label="$t('page-menu.dashboards.title')">
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'dashboards-menu' as string
})
</script>
