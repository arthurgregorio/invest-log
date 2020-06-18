<template>
  <main class="column">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="title">
            <slot name="page-title" />
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <nuxt-link :to="localePath({ name: '/' })">
                  <b-icon pack="fas" size="is-small" icon="home" />
                  {{ $t('breadcrumb.pages.home') }}
                </nuxt-link>
              </li>
              <li
                v-for="(breadcrumbItem, index) in breadcrumbItems"
                :key="index"
                :class="{ 'is-active': breadcrumbItem.active }"
              >
                <a v-if="breadcrumbItem.active" href="#" aria-current="page">
                  {{ $t(breadcrumbItem.name) }}
                </a>
                <nuxt-link v-else :to="localePath({ name: breadcrumbItem.outcome })">
                  {{ $t(breadcrumbItem.name) }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="columns is-multiline has-margin-top-2">
      <slot name="content" />
    </div>
  </main>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export interface BreadcrumbItem {
  name: string
  outcome: string
  active: boolean
}

export default Vue.extend({
  name: 'page-content' as string,
  props: {
    breadcrumbItems: {
      type: Array,
      required: true
    } as PropOptions<BreadcrumbItem[]>
  }
})
</script>
