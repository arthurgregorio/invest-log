<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ stock.ticker }}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true" />
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content is-multiline columns">
        <div class="column is-12">
          <small>{{ $t('components.stock-display.current-value') }}</small>
          <h1>{{ 0 | currency(stock.currency) }}</h1>
        </div>
        <div class="column is-6">
          <small>{{ $t('components.stock-display.buy-value') }}</small>
          <h4>{{ stock.buyValue | currency(stock.currency) }}</h4>
        </div>
        <div class="column is-6">
          <small>{{ $t('components.stock-display.performance') }}</small>
          <h4>{{ 0 | currency(stock.currency) }}</h4>
        </div>
        <div class="column is-6">
          <small>{{ $t('components.stock-display.stop-loss') }}</small>
          <h4>{{ 0 | currency(stock.currency) }}</h4>
        </div>
        <div class="column is-6">
          <small>{{ $t('components.stock-display.selling-value') }}</small>
          <h4>{{ 0 | currency(stock.currency) }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { Stock } from '@/models/operations/stock'

export default Vue.extend({
  name: 'stock-display' as string,
  props: {
    stock: {
      required: true,
      type: Object as () => Stock
    }
  }
})
</script>

<style scoped>
.content h1:not(:first-child) {
  margin-top: 0;
}
.card-content {
  padding: 1rem;
}
.column {
  padding: 0 0.75rem 0 0.75rem;
}
</style>
