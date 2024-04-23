import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Religion und Politik. Eine Quellenanthologie zu gesellschaftlichen Konjunkturen in der Neuzeit",
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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
