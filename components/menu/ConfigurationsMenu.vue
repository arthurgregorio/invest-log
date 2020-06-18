<template>
  <aside class="column is-2">
    <b-menu>
      <b-menu-list :label="$t('page-menu.configurations.title')">
        <b-menu-item
          tag="router-link"
          :to="localePath({ name: 'configurations-users' })"
          :label="$t('page-menu.configurations.users')"
        />
      </b-menu-list>
    </b-menu>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'configurations-menu' as string
})
</script>
