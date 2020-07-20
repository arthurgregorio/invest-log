<template>
  <page-content>
    <template v-slot:page-title>
      {{ $t('dashboards.page-title') }}
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
  name: 'dashboards-index' as string,
  layout: 'dashboards-layout',
  components: {
    PageContent
  }
})
</script>
