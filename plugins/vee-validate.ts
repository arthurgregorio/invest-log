import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, confirmed, length, email, min, max } from 'vee-validate/dist/rules'

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

extend('min', { ...min })
extend('max', { ...max })
extend('email', { ...email })
extend('length', { ...length })
extend('required', { ...required })
extend('confirmed', { ...confirmed })

extend('matchPassword', {
  params: ['target'],
  // eslint-disable-next-line
  validate(value, { target }: Record<string, any>) {
    return value === target
  }
})
