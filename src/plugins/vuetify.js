import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VSwitch,
  VSlider,
  VMenu,
  VTextField,
  VSelect,
  VCheckbox,
  VTextarea,
  VForm,
  VDialog,
  VDivider

  
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VSwitch,
    VSlider,
    VMenu,
    VTextField,
    VSelect,
    VCheckbox,
    VTextarea,
    VForm,
    VDialog,
    VDivider

  },
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
})
