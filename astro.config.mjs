// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "Inter",
    cssVariable: "--font-inter",
    options: {
      variants: [{
        src: ['./src/assets/fonts/InterVariable.woff2'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }, 
  {
    provider: fontProviders.local(),
    name: "Lora",
    cssVariable: "--font-lora",
    options: {
      variants: [{
        src: ['./src/assets/fonts/Lora-VariableFont_wght.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  },
  {
    provider: fontProviders.local(),
    name: "JetBrains Mono",
    cssVariable: "--font-jetbrains",
    options: {
      variants: [{
        src: ['./src/assets/fonts/JetBrainsMono.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
