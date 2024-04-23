import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Religion und Politik",
  description: "Eine Quellenanthologie zu gesellschaftlichen Konjunkturen in der Neuzeit",
  base: "/konjunkturen",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://www.ieg-mainz.de/assets/images/IEG_Logo.png',
	nav: [
      { text: 'Start', link: '/' },
      { text: 'Impressum', link: '/impressum' },
	  { text: 'Datenschutz', link: '/datenschutz' },
	  { text: 'IEG Mainz', link: 'https://ieg-mainz.de' }
    ],
	search: {
      provider: 'local'
	}
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  }
})
