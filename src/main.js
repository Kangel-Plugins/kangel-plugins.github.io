import { createApp } from 'vue/dist/vue.esm-bundler.js'
import '@material/web/button/filled-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/list/list.js'
import '@material/web/list/list-item.js'
import '@material/web/iconbutton/filled-tonal-icon-button.js'
import '@hackernoon/pixel-icon-library/fonts/iconfont.css'
import { translations } from './translations.js'

const app = createApp({
  data() {
    let theme = 'system'
    try {
      const saved = localStorage.getItem('kpm-theme')
      if (['light', 'dark', 'system'].includes(saved)) theme = saved
    } catch { /* Storage can be unavailable in private browsing. */ }
    let ui = 'md3'
    try { if (localStorage.getItem('kpm-ui') === 'needy') ui = 'needy' } catch { /* Storage is optional. */ }
    return { locale: navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en', theme, ui, effectiveDark: false }
  },
  computed: {
    t() { return translations[this.locale] },
  },
  mounted() {
    this.setLocale(this.locale)
    this.applyTheme()
    this.applyUi()
    this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    this.onSchemeChange = () => this.applyTheme()
    this.colorScheme.addEventListener('change', this.onSchemeChange)
  },
  unmounted() {
    this.colorScheme.removeEventListener('change', this.onSchemeChange)
  },
  methods: {
    scrollToSection(id) {
      document.getElementById('needy-' + id)?.scrollIntoView({ behavior: 'smooth' })
    },
    setLocale(locale) {
      this.locale = locale
      document.documentElement.lang = locale
      document.title = locale === 'ru' ? 'KPM — Правила публикации' : 'KPM — Publishing rules'
    },
    setTheme(theme) {
      this.theme = theme
      try { localStorage.setItem('kpm-theme', theme) } catch { /* The current session still works. */ }
      this.applyTheme()
    },
    applyTheme() {
      const dark = this.theme === 'dark' || (this.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
      this.effectiveDark = dark
      document.documentElement.dataset.theme = dark ? 'dark' : 'light'
      document.querySelector('meta[name="theme-color"]').content = dark ? '#15121c' : '#fdf7ff'
    },
    setUi(ui) {
      this.ui = ui
      try { localStorage.setItem('kpm-ui', ui) } catch { /* Storage is optional. */ }
      this.applyUi()
    },
    applyUi() {
      let link = document.getElementById('needy-styles')
      if (this.ui === 'needy' && !link) {
        link = document.createElement('link')
        link.id = 'needy-styles'
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/gh/ArThirtyFour/NeedyWebUI@776d9b7a6d0765cda43f0456c50a57c48ea94a4e/nso_ui.css'
        const firstStyle = document.head.querySelector('style, link[rel="stylesheet"]')
        document.head.insertBefore(link, firstStyle)
      }
      if (link) link.disabled = this.ui !== 'needy'
    },
  },
})

app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('md-')
app.mount('#app')
