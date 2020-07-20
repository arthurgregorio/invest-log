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
  name: 'configurations-index' as string,
  layout: 'configurations-layout',
  components: {
    PageContent
  }
})
</script>
