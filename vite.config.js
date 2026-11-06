
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Orbital EV',
        short_name: 'Orbital EV',
        description: 'Smart EV Charging Management System',
        theme_color: '#101810',
        background_color: '#080d09',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/orbital-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any'
          }
        ]
      }
    })
  ]
})
