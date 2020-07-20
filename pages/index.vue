<template>
  <page-content>
    <template v-slot:page-title>
      {{ $t('home.page-title') }}
    </template>
    <template v-slot:content>
      <!-- TODO -->
    </template>
  </page-content>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import PageContent from '@/components/utilities/PageContent.vue'

@Component({
  layout: 'home-layout',
  components: {
    PageContent
  }
})
export default class Home extends Vue {}
</script>
