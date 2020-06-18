<template>
  <b-dropdown position="is-bottom-left" append-to-body aria-role="menu" trap-focus>
    <button slot="trigger" slot-scope="{ active }" class="button">
      <span>Administrator</span>
      <b-icon pack="fas" size="is-small" :icon="active ? 'angle-up' : 'angle-down'" />
    </button>
    <b-dropdown-item aria-role="listitem">
      <b-icon pack="fas" size="is-small" icon="cog" />
      {{ $t('user-menu.items.my-profile') }}
    </b-dropdown-item>
    <b-dropdown-item aria-role="listitem" @click="doLogout">
      <b-icon pack="fas" size="is-small" icon="sign-out-alt" />
      {{ $t('user-menu.items.logout') }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'user-menu' as string,
  methods: {
    doLogout(): void {
      this.$router.push(this.localePath({ name: 'login' }))
    }
  }
})
</script>
