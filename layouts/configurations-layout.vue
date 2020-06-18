<template>
  <page-structure>
    <div class="columns">
      <aside class="column is-2">
        <b-menu>
          <b-menu-list :label="$t('page-menu.configurations.title')">
            <b-menu-item
              tag="router-link"
              :to="{ name: 'usuarios' }"
              :label="$t('page-menu.configurations.users')"
            />
          </b-menu-list>
        </b-menu>
      </aside>
      <nuxt />
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import PageStructure from '@/components/utilities/PageStructure.vue'

export default Vue.extend({
  name: 'configurations-layout' as string,
  components: {
    PageStructure
  }
})
</script>
