<template>
  <page-content :breadcrumb-items="breadcrumbItems">
    <template v-slot:page-title>
      {{ $t('stock-market.page-title.listing') }}
    </template>
    <template v-slot:content>
      <div class="columns is-multiline">
        <div v-for="stock in stocks" :key="stock.id" class="column is-3">
          <stock-display :stock="stock" />
        </div>
      </div>
    </template>
  </page-content>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'

import FormUtilities from '@/utils/form-utilities.mixin'

import { Stock } from '@/models/operations/stock'
import { Currency } from '@/models/operations/currency'

import PageContent, { BreadcrumbItem } from '@/components/utilities/PageContent.vue'
import OperationsMenu from '@/components/menu/OperationsMenu.vue'
import StockDisplay from '@/components/stocks/StockDisplay.vue'

@Component({
  layout: 'operations-layout',
  components: {
    PageContent,
    StockDisplay,
    OperationsMenu
  }
})
export default class Operations extends mixins(FormUtilities) {
  private stocks: Stock[] = []
  private breadcrumbItems: BreadcrumbItem[] = []

  public mounted(): void {
    this.breadcrumbItems = [
      { name: 'breadcrumb.pages.operations', outcome: 'operations', active: false },
      { name: 'breadcrumb.pages.stock-market', outcome: 'operations-stock-market', active: true }
    ]

    this.stocks = [
      { id: 1, ticker: 'OIBR3', buyValue: 0.95, currency: Currency.BRL },
      { id: 2, ticker: 'CVCB3', buyValue: 34.48, currency: Currency.BRL },
      { id: 3, ticker: 'VVAR3', buyValue: 11.32, currency: Currency.BRL },
      { id: 4, ticker: 'WEGE3', buyValue: 36.88, currency: Currency.BRL },
      { id: 5, ticker: 'GRND3', buyValue: 11.27, currency: Currency.BRL },
      { id: 6, ticker: 'MGLU3', buyValue: 49.88, currency: Currency.BRL },
      { id: 7, ticker: 'VIVA3', buyValue: 23.90, currency: Currency.BRL },
      { id: 8, ticker: 'EGIE3', buyValue: 48.24, currency: Currency.BRL },
      { id: 9, ticker: 'POMO4', buyValue: 5.29, currency: Currency.BRL },
      { id: 10, ticker: 'NTCO3', buyValue: 42.38, currency: Currency.BRL },
      { id: 11, ticker: 'BBDC4', buyValue: 19.94, currency: Currency.BRL },
      { id: 12, ticker: 'ABEV3', buyValue: 14.60, currency: Currency.BRL },
      { id: 13, ticker: 'ENBR3', buyValue: 21.70, currency: Currency.BRL },
      { id: 14, ticker: 'MOVI3', buyValue: 16.43, currency: Currency.BRL },
      { id: 15, ticker: 'SQIA3', buyValue: 18.15, currency: Currency.BRL },
      { id: 16, ticker: 'AZUL4', buyValue: 41.11, currency: Currency.BRL },
      { id: 17, ticker: 'IRBR3', buyValue: 25.86, currency: Currency.BRL },
      { id: 18, ticker: 'HGLG11', buyValue: 185.66, currency: Currency.BRL },
      { id: 19, ticker: 'VISC11', buyValue: 133.67, currency: Currency.BRL }
    ]
  }
}
</script>
