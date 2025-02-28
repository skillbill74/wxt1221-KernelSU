[English](README.md) | [Español](README_ES.md) | [简体中文](README_CN.md) | [繁體中文](README_TW.md) | [日本語](README_JP.md) | [Polski](README_PL.md) | **Português (Brasil)** | [Türkçe](README_TR.md) | [Русский](README_RU.md) | [Tiếng Việt](README_VI.md) | [Indonesia](README_ID.md) | [עברית](README_iw.md) | [हिंदी](README_IN.md)

# KernelSU

<img src="https://kernelsu.org/logo.png" style="width: 96px;" alt="logo">

Uma solução root baseada em kernel para dispositivos Android.

[![latest release badge](https://img.shields.io/github/v/release/wxt1221/KernelSU?label=Release&logo=github)](https://github.com/wxt1221/KernelSU/releases/latest)
[![weblate](https://img.shields.io/badge/Localização-Weblate-teal?logo=weblate)](https://hosted.weblate.org/engage/kernelsu)
[![Channel](https://img.shields.io/badge/Siga-Telegram-blue.svg?logo=telegram)](https://t.me/KernelSU)
[![License: GPL v2](https://img.shields.io/badge/Licença-GPL%20v2-orange.svg?logo=gnu)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![GitHub License](https://img.shields.io/github/license/wxt1221/KernelSU?logo=gnu)](/LICENSE)

## Características

1. `su` e gerenciamento de acesso root baseado em kernel.

2. Sistema modular baseado em overlayfs.

3. [Perfil do Aplicativo](https://kernelsu.org/pt_BR/guide/app-profile.html): Tranque o poder root em uma gaiola.

## Estado de Compatibilidade

O KernelSU oferece suporte oficial a dispositivos Android GKI 2.0 (kernel 5.10+). Kernels mais antigos (4.14+) também são compatíveis, mas o kernel terá que ser construído manualmente.

Com isso, WSA, ChromeOS e Android baseado em contêiner são todos suportados.

Atualmente, apenas `arm64-v8a` e `x86_64` são suportados.

## Uso
 - [Instalação](https://kernelsu.org/pt_BR/guide/installation.html)
 - [Como construir o KernelSU?](https://kernelsu.org/pt_BR/guide/how-to-build.html)
 - [Site oficial](https://kernelsu.org/pt_BR/)

## Tradução
Para contribuir com a tradução do KernelSU ou aprimorar traduções existentes, por favor, utilize o [Weblate](https://hosted.weblate.org/engage/kernelsu/). PR para a tradução do Gerenciador não são mais aceitos, pois podem entrar em conflito com o Weblate.

## Discussão

- Telegram: [@KernelSU](https://t.me/KernelSU)

## Licença

- Os arquivos no diretório `kernel` são [GPL-2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

- Todas as outras partes, exceto o diretório `kernel` são [GPL-3](https://www.gnu.org/licenses/gpl-3.0.html)

## Créditos

- [kernel-assisted-superuser](https://git.zx2c4.com/kernel-assisted-superuser/about/): a ideia do KernelSU.
- [Magisk](https://github.com/topjohnwu/Magisk): a poderosa ferramenta root.
- [genuine](https://github.com/brevent/genuine/): validação de assinatura apk v2.
- [Diamorphine](https://github.com/m0nad/Diamorphine): algumas habilidades de rootkit.
