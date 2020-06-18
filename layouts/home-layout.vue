<template>
  <page-structure>
    <div class="columns">
      <nuxt />
    </div>
  </page-structure>
</template>

<script lang="ts">
import Vue from 'vue'

import PageStructure from '@/components/utilities/PageStructure.vue'

export default Vue.extend({
  name: 'home-layout' as string,
  components: {
    PageStructure
  }
})
</script>
