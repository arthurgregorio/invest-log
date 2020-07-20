<template>
  <page-content>
    <template v-slot:page-title>
      <!-- title -->
    </template>
    <template v-slot:content>
      <!-- content -->
    </template>
  </page-content>
</template>

<script lang="ts">
import Vue from 'vue'

import PageContent from '@/components/utilities/PageContent.vue'

export default Vue.extend({
  name: 'operations-index' as string,
  layout: 'operations-layout',
  components: {
    PageContent
  }
})
</script>
