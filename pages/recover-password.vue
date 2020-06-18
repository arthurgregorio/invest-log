<template>
  <div>
    <h3 class="title has-text-black">
      {{ $t('application.full-name') }}
    </h3>
    <p class="subtitle has-text-black">
      {{ $t('recover-password.subtitle') }}
    </p>
    <validation-observer ref="observer" v-slot="{ passes, invalid }">
      <validation-provider
        v-slot="{ errors, valid }"
        rules="required|email"
        :name="$t('recover-password.form.email')"
      >
        <b-field
          :message="errors"
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
        >
          <b-input
            v-model="email"
            type="text"
            tabindex="1"
            icon="envelope"
            size="is-large"
            icon-pack="fas"
            :placeholder="$t('recover-password.form.email')"
          />
        </b-field>
      </validation-provider>
      <b-button
        tabindex="2"
        size="is-large"
        type="is-primary"
        :loading="loading"
        class="is-block is-fullwidth"
        :disabled="invalid || loading"
        @click.prevent="passes(doRecover)"
      >
        {{ $t('recover-password.actions.recover') }}
      </b-button>
    </validation-observer>
    <p class="has-text-grey has-margin-top-4">
      <nuxt-link :to="localePath({ name: 'login' })">
        {{ $t('recover-password.actions.back-to-login') }}
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'external-layout'
})
export default class RecoverPassword extends Vue {
  private email = ''
  private loading = false

  private doRecover(): void {
    this.loading = true
    setTimeout(() => {
      this.$buefy.toast.open({ message: this.email, type: 'is-info' })
      this.loading = false
    }, 500)
  }
}
</script>
