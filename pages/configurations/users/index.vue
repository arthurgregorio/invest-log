<template>
  <page-structure>
    <div class="columns">
      <configurations-menu />
      <page-content :breadcrumb-items="breadcrumbItems">
        <template v-slot:page-title>
          {{ $t('users.page-title.listing') }}
        </template>
        <template v-slot:content>
          <!-- TODO -->
        </template>
      </page-content>
    </div>
  </page-structure>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'

import FormUtilities from '@/utils/form-utilities.mixin'

import PageContent, { BreadcrumbItem } from '@/components/utilities/PageContent.vue'
import ConfigurationsMenu from '@/components/menu/ConfigurationsMenu.vue'

@Component({
  layout: 'internal-layout',
  components: {
    PageContent,
    ConfigurationsMenu
  }
})
export default class Users extends mixins(FormUtilities) {
  private breadcrumbItems: BreadcrumbItem[] = []

  public mounted(): void {
    this.breadcrumbItems = [
      { name: 'breadcrumb.pages.configurations', outcome: 'configurations', active: false },
      { name: 'breadcrumb.pages.users', outcome: 'configurations-users', active: true }
    ]
  }
}
</script>
