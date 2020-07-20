<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'

import { eventBus } from '@/utils/event-bus'

@Component
export default class ErrorHandler extends Vue {
  public mounted(): void {
    eventBus.$on('errorCaught', this.displayError)
  }

  public displayError(event: AxiosResponse): void {
    const status = event?.status
    const data = event?.data

    /*
    I'm not proud of this code, but since I can't find any other way to
    deal with exceptions in a global way (like JSF and his exceptions handlers),
    this seeems to be the best way to achieve this kind of exception handling

    To let exceptions be caught here, just use the method shouldLog(error)
    from the form-utilities-mixin, an generic event bus will deliver the
    error to this component
    */

    if (status === 400) {
      if (!data) {
        this.showToast(this.translate('comuns.feedback.bad-request'))
      } else if (data?.error === 'invalid_grant') {
        this.showToast(this.translate('comuns.feedback.bad-credentials'), 'is-warning')
      } else {
        this.showToast(data?.message, 'is-warning')
      }
    } else if (status === 401) {
      this.$router.push({ name: '401' })
    } else if (status === 403) {
      this.$router.push({ name: '403' })
    } else if (status === 500) {
      if (data.includes('ECONNREFUSED')) {
        this.showToast(this.translate('comuns.feedback.erro-conexao'))
      } else {
        this.showToast(this.translate('comuns.feedback.erro-servidor'))
      }
    }
  }

  private showToast(message: string, type = 'is-danger'): void {
    this.$buefy.toast.open({ message: message, type: type })
  }

  private translate(message: string): string {
    return this.$t(message).toString()
  }
}
</script>
