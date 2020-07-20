import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

const Vue2FiltersConfig = {
  capitalize: {
    onlyFirstLetter: false
  },
  number: {
    format: '0',
    thousandsSeparator: '.',
    decimalSeparator: ','
  },
  currency: {
    symbol: '$',
    decimalDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: true,
    showPlusSign: false
  }
}

Vue.use(Vue2Filters, Vue2FiltersConfig)
