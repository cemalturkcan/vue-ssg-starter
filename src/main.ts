import { ViteSSG } from 'vite-ssg'
import './styles/style.css'
import './styles/markdown.css'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),

  },
  ({ }) => {
  },

)
