import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import { VDataTable } from 'vuetify/labs/components'

export type Headers = InstanceType<typeof VDataTable>['headers']

export default createVuetify(
  {
    theme: {
      defaultTheme: 'light'
    },
    components: {...components, VDataTable},
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
  }
)
