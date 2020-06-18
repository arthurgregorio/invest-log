<template>
  <aside class="column is-2">
    <b-menu>
      <b-menu-list :label="$t('page-menu.operations.title')">
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'operations-menu' as string
})
</script>
