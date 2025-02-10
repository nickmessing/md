import { defineConfig } from 'vitepress'
import { katex } from '@mdit/plugin-katex'
import tailwindcss from '@tailwindcss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ro-RO',
  title: 'Matematica Discretă',
  description: 'Teoria Grafurilor și Logica',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Pagina principală', link: '/' },
      { text: 'Logica', link: '/logica' },
      { text: 'Algoritmica Grafurilor', link: '/grafuri' },
    ],

    sidebar: {
      '/logica/': [
        { text: 'Algebra propozițiilor', link: '/logica/algebra-propozitiilor' },
        { text: 'Forme normale', link: '/logica/forme-normale' },
        { text: 'Constructor de tabele', link: '/logica/tabele' },
        { text: 'Calculator de forma normală', link: '/logica/calculator-forma-normala' },
      ],
      '/grafuri/': [
        { text: 'Editor de grafuri', link: '/grafuri/editor' },
        { text: 'Noțiuni', link: '/grafuri/notiuni' },
        { text: 'Tipuri de grafuri', link: '/grafuri/tipuri' },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/nickmessing/md' }],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Caută',
            buttonAriaLabel: 'Caută',
          },
          modal: {
            displayDetails: 'Afișează detalii',
            resetButtonTitle: 'Resetează',
            backButtonTitle: 'Înapoi',
            noResultsText: 'Niciun rezultat găsit',
            footer: {
              selectText: 'Selectează',
              selectKeyAriaLabel: 'Selectează',
              navigateText: 'Navighează',
              navigateUpKeyAriaLabel: 'Navighează sus',
              navigateDownKeyAriaLabel: 'Navighează jos',
              closeText: 'Închide',
              closeKeyAriaLabel: 'Închide',
            },
          },
        },
      },
    },
    outline: {
      label: 'Cuprins',
    },
    notFound: {
      title: 'Pagina nu a fost găsită',
      quote: 'Nu toți cei care rătăcesc sunt pierduți.',
      linkLabel: 'Înapoi la pagină de start',
      linkText: 'Înapoi la pagină de start',
    },
    lightModeSwitchTitle: 'Comută la modul luminos',
    darkModeSwitchTitle: 'Comută la modul întunecat',
    darkModeSwitchLabel: 'Aparență',
    sidebarMenuLabel: 'Cuprins',
    returnToTopLabel: 'Înapoi sus',
    docFooter: {
      prev: 'Pagina anterioară',
      next: 'Pagina următoare',
    },
  },
  markdown: {
    config: md => {
      md.use(katex, {
        output: 'html',
      })
    },
  },
  vite: {
    plugins: [tailwindcss() as any],
  },
})
