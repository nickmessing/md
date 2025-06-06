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
      {
        text: 'Pagina principală',
        link: '/',
      },
      {
        text: 'Logica',
        link: '/logica',
      },
      {
        text: 'Algoritmica Grafurilor',
        link: '/grafuri',
      },
    ],

    sidebar: {
      '/logica/': [
        {
          text: 'Algebra propozițiilor',
          link: '/logica/algebra-propozitiilor',
        },
        {
          text: 'Forme normale',
          link: '/logica/forme-normale',
        },
        {
          text: 'Forme normale perfecte',
          link: '/logica/forme-normale-perfecte',
        },
        {
          text: 'Funcțiile algebrei propoziționale',
          link: '/logica/functiile-algebrei-propozitionale',
        },
        {
          text: 'Constructor de tabele',
          link: '/logica/tabele',
        },
        {
          text: 'Calculator de forma normală',
          link: '/logica/calculator-forma-normala',
        },
        {
          text: 'Metoda analitică de definire a funcțiilor algebrei propoziționale',
          link: '/logica/metoda-analitica',
        },
        {
          text: 'Realizarea funcțiilor algebrei propoziționale prin formule',
          link: '/logica/realizarea-functiilor',
        },
        {
          text: 'Completitudine funcțională. Exemple de sisteme funcțional complete',
          link: '/logica/completitudine-functionala',
        },
        {
          text: 'Mulțimi funcțional închise',
          link: '/logica/multimi-functional-inchise',
        },
        {
          text: 'Calculul propozițiilor',
          link: '/logica/calculul-propozitiilor',
        },
        {
          text: 'Axiomele calculului propozițional',
          link: '/logica/axiomele-calculului-propozitional',
        },
        {
          text: 'Teorema Deducției',
          link: '/logica/teorema-deductiei',
        },
        {
          text: 'Aplicațiile teoremei deducției. Regulile derivate de deducție',
          link: '/logica/aplicatiile-teoremei-deductiei',
        },
        {
          text: 'Formule echivalente. Teorema echivalenței',
          link: '/logica/formule-echivalente',
        },
        {
          text: 'Necontradictia calculului propozițional',
          link: '/logica/necontradictia-calculului-propozitional',
        },
        {
          text: 'Completitudinea calculului propozițional',
          link: '/logica/completitudinea-calculului-propozitional',
        },
        {
          text: 'Logica predicatelor',
          link: '/logica/logica-predicatelor',
        },
        {
          text: 'Formule normale în logica predicatelor',
          link: '/logica/formule-normale-predicate',
        },
        {
          text: 'Formule realizabile',
          link: '/logica/formule-realizabile',
        },
        {
          text: 'Calculul predicatelor',
          link: '/logica/calculul-predicatelor',
        },
        {
          text: 'Teorema deducției în calculul predicatelor',
          link: '/logica/teorema-deductiei-predicate',
        },
      ],
      '/grafuri/': [
        {
          text: 'Editor de grafuri',
          link: '/grafuri/editor',
        },
        {
          text: 'Noțiuni',
          link: '/grafuri/notiuni',
        },
        {
          text: 'Tipuri de grafuri',
          link: '/grafuri/tipuri',
        },
        {
          text: 'Cheat Sheet',
          link: '/grafuri/cs',
        },
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
        trust: true,
        leqno: true,
      })
    },
  },
  vite: {
    plugins: [tailwindcss() as any],
    server: {
      host: '0.0.0.0',
    },
  },
})
