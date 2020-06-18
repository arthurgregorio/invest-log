import { configure } from 'vee-validate'

export default function({ app } : { app: any }) {
  configure({
    defaultMessage: (field, values) => {
      if (values && values !== undefined) {
        values._field_ = `${field}`.toLowerCase()
      }
      return app.i18n.t(`validation.${values?._rule_}`, values) as string
    }
  })
}
