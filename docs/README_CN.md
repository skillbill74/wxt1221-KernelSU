各位好，我是 wxt1221,weishu 已经将 KernelSU 项目 Public Archive ，我会继续进行KSU维护，我们不会重构KSU。

KSU的新功能诸如kmod,ksufs等将会延后一段时间进行维护，我们会优先处理好当前的bug。

另外我们需要Android Apps开发人员进行Manager维护。

欢迎各位加入！

[English](README.md) | [Español](README_ES.md) | **简体中文** | [繁體中文](README_TW.md) | [日本語](README_JP.md) | [Polski](README_PL.md) | [Portuguese-Brazil](README_PT-BR.md) | [Türkçe](README_TR.md) | [Русский](README_RU.md) | [Tiếng Việt](README_VI.md) | [Indonesia](README_ID.md) | [עברית](README_iw.md) | [हिंदी](README_IN.md)

# KernelSU

<img src="https://kernelsu.org/logo.png" style="width: 96px;" alt="logo">

一个 Android 上基于内核的 root 方案。

[![latest release badge](https://img.shields.io/github/v/release/wxt1221/KernelSU?label=Release&logo=github)](https://github.com/wxt1221/KernelSU/releases/latest)
[![weblate](https://img.shields.io/badge/Localization-Weblate-teal?logo=weblate)](https://hosted.weblate.org/engage/kernelsu)
[![Channel](https://img.shields.io/badge/Follow-Telegram-blue.svg?logo=telegram)](https://t.me/KernelSU)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-orange.svg?logo=gnu)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
[![GitHub License](https://img.shields.io/github/license/wxt1221/KernelSU?logo=gnu)](/LICENSE)


## 特性

- 基于内核的 `su` 和权限管理。
- 基于 [OverlayFS](https://en.wikipedia.org/wiki/OverlayFS) 的模块系统。
- [App Profile](https://kernelsu.org/guide/app-profile.html): 把 Root 权限关进笼子里。

## 兼容状态

KernelSU 官方支持 GKI 2.0 的设备（内核版本5.10以上）；旧内核也是兼容的（最低4.14+），不过需要自己编译内核。

WSA, ChromeOS 和运行在容器上的 Android 也可以与 KernelSU 一起工作。

目前支持架构 : `arm64-v8a` 和 `x86_64`

## 使用方法

- [安装教程](https://kernelsu.org/zh_CN/guide/installation.html)
- [如何构建？](https://kernelsu.org/zh_CN/guide/how-to-build.html)
- [官方网站](https://kernelsu.org/)

## 参与翻译

要将 KernelSU 翻译成您的语言，或完善现有的翻译，请使用 [Weblate](https://hosted.weblate.org/engage/kernelsu/)。现已不再接受有关管理器翻译的PR，因为这会与Weblate冲突。

## 讨论

- Telegram: [@KernelSU](https://t.me/KernelSU)

## 安全性
有关报告 KernelSU 安全漏洞的信息，请参阅 [SECURITY.md](/SECURITY.md).

## 许可证

- 目录 `kernel` 下所有文件为 [GPL-2.0-only](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
- 除 `kernel` 目录的其他部分均为 [GPL-3.0-or-later](https://www.gnu.org/licenses/gpl-3.0.html)

## 鸣谢

- [kernel-assisted-superuser](https://git.zx2c4.com/kernel-assisted-superuser/about/)：KernelSU 的灵感。
- [Magisk](https://github.com/topjohnwu/Magisk)：强大的 root 工具箱。
- [genuine](https://github.com/brevent/genuine/)：apk v2 签名验证。
- [Diamorphine](https://github.com/m0nad/Diamorphine)：一些 rootkit 技巧。
