# Manduca Astro Theme

**Manduca** is a **Link in Bio** theme for [Astro](https://astro.build). 

![Theme Screenshots](/screenshots/screenshots-2cols.webp)

[![Live Demo](https://img.shields.io/badge/live-demo-ef0fff?style=flat-square)](#)
[![Astro](https://img.shields.io/badge/Astro-6-3d50f5?style=flat-square&logo=astro&logoColor=white)](https://astro.build)

It comes with some basic options and a modern, lightweight Tailwind CSS 4-powered layout system. 

If you want to publish your own custom, self-hosted, and accessible links homepage, Manduca is a simple and fast solution. It only needs a few minutes for customization and deployment.

## Quick start

To use this template, just launch the console and type:

```sh
pnpm create astro@latest my-project -- --template jomorespi/manduca
cd my-project
pnpm run dev
```

If you prefer, you can clone this repository:

```sh
git clone https://github.com/jomorespi/manduca.git
cd manduca
pnpm install
pnpm run dev
```

## Content and Customization

This theme includes a `settings.json` file to make customization easier. In this file you can change display options as well as manipulate the content of your homepage.

Furthermore, thanks to the power of Tailwind CSS 4, you can manipulate its appearance with little effort.

1. Open `src/settings.json`
    - Choose between style options.
    - Write your name and description. Add your profile image.
    - Set your custom links and social media profiles.
2. Open `src/assets/styles/theme.css`
    - Set your custom accent color.
    - Change anything you want.

By manipulating only these two files, you'll have your custom Link in Bio page ready.

### Settings file

You'll find a few options in the settings file:

#### Style
```json
"Align": "center", # Two layout modes: center / left
"Decoration": "all" # Four options for decorative elements: avatar / lines / all / none
```

#### Content

```json
"Language": "en" # Make sure to use a valid ISO Language Code (see w3schools.com/tags/ref_language_codes.asp)
```

#### Header
```json
"Name": "", # Your name
"Bio": "", # Description text
"Avatar": "default2.webp" # Save your image in the folder: public/img
```

#### Links

Just add your links following the examples in the file. They will appear on the homepage as large buttons.

#### Social

The available social media icons are: Linkedin, Mastodon, Bluesky, Threads, Twitter, Instagram, Pinterest, Snapchat, Facebook, Vimeo, YouTube, TikTok, Twitch, Spotify, GitHub, GitLab, StackOverflow, Discord, Behance, Dribbble, Reddit, Quora, Substack, Medium, WordPress, WhatsApp, Telegram, and Strava.

If you add a custom item, it will also appear with a link icon:

```json
"Example": "https://example.com",
```

#### Footer

```json
"Text": "", # Just a copyright, date, or disclaimer text in the footer
"Menu": {}  # If you need to add custom content pages to your website, you can link them from this menu. Use relative links (without the leading slash). Examples: "about", "contact", "policy"
```

### Content pages

You can add content pages and edit them using Markdown. Just add as many `.md` files as you need in the pages folder: `src/pages`. Make sure you use the correct layout:

```md
---
layout: ../layouts/PageLayout.astro
title: "My page title"
---
```

## Learn more

### Tailwind CSS 4

Using the famous Tailwind utility classes, you'll be free to customize the theme. Check the [Tailwind docs](https://tailwindcss.com/docs/) for further information.

### Astro

Astro's power is enormous, starting with the ease of generating static pages with just a few commands:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally before deploying      |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the Astro [Discord server](https://astro.build/chat).