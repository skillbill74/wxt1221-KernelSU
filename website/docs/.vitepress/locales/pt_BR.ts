import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'pt-BR',
  description: 'Uma solução root baseada em kernel para dispositivos Android GKI.',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: 'Última atualização',

    sidebar: {
      '/pt_BR/guide/': sidebarGuide()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxt1221/KernelSU' }
    ],

    footer: {
        message: 'Lançado sob a Licença GPL3.',
        copyright: 'Copyright © Desenvolvedores KernelSU atuais de 2022'
    },

    editLink: {
        pattern: 'https://github.com/wxt1221/KernelSU/edit/main/website/docs/:path',
        text: 'Edite esta página no GitHub'
    }
  }
})

function nav() {
  return [
    { text: 'Guia', link: '/pt_BR/guide/what-is-kernelsu' },
  ]
}

function sidebarGuide() {
  return [
    {
        text: 'Guia',
        items: [
          { text: 'O que é KernelSU?', link: '/pt_BR/guide/what-is-kernelsu' },
          { text: 'Diferença com Magisk', link: '/pt_BR/guide/difference-with-magisk' },
          { text: 'Instalação', link: '/pt_BR/guide/installation' },
          { text: 'Como construir?', link: '/pt_BR/guide/how-to-build' },
          { text: 'Integração para dispositivos não GKI', link: '/pt_BR/guide/how-to-integrate-for-non-gki'},
          { text: 'Dispositivos com suporte não oficial', link: '/pt_BR/guide/unofficially-support-devices.md' },
          { text: 'Guias de módulo', link: '/pt_BR/guide/module.md' },
          { text: 'Perfil do Aplicativo', link: '/pt_BR/guide/app-profile.md' },
          { text: 'Resgate do bootloop', link: '/pt_BR/guide/rescue-from-bootloop.md' },
          { text: 'FAQ', link: '/pt_BR/guide/faq' },
          { text: 'Recursos ocultos', link: '/pt_BR/guide/hidden-features' },
        ]
    }
  ]
}
