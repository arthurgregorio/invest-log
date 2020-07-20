<template>
  <div>
    <h3 class="title has-text-black">
      {{ $t('application.full-name') }}
    </h3>
    <p class="subtitle has-text-black">
      {{ $t('login.subtitle') }}
    </p>
    <validation-observer ref="observer" v-slot="{ passes, invalid }">
      <validation-provider
        v-slot="{ errors, valid }"
        rules="required"
        :name="$t('login.form.username')"
      >
        <b-field :message="errors" :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            v-model="credential.username"
            type="text"
            icon="user"
            tabindex="1"
            size="is-large"
            icon-pack="fas"
            :placeholder="$t('login.form.username')"
          />
        </b-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors, valid }"
        rules="required"
        :name="$t('login.form.password')"
      >
        <b-field :message="errors" :type="{ 'is-danger': errors[0], 'is-success': valid }">
          <b-input
            v-model="credential.password"
            icon="lock"
            tabindex="2"
            type="password"
            size="is-large"
            icon-pack="fas"
            password-reveal
            :placeholder="$t('login.form.password')"
          />
        </b-field>
      </validation-provider>
      <b-button
        tabindex="3"
        size="is-large"
        type="is-primary"
        :loading="loading"
        :disabled="invalid || loading"
        class="is-block is-fullwidth"
        @click.prevent="passes(doLogin)"
      >
        {{ $t('login.actions.login') }}
      </b-button>
    </validation-observer>
    <p class="has-text-grey has-margin-top-4">
      <nuxt-link :to="localePath({ name: 'recover-password' })">
        {{ $t('login.actions.forgot-password') }}
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'

import { Credential } from '@/models/configurations/credential'

import FormUtilities from '@/utils/form-utilities.mixin'

@Component({
  layout: 'external-layout'
})
export default class Login extends mixins(FormUtilities) {
  private credential = new Credential()

  private doLogin(): void {
    this.loading = true
    setTimeout(() => {
      this.$router.push(this.localePath({ name: '/' }))
    }, 500)
  }
}
</script>
