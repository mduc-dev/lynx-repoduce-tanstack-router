import { createRequire } from 'node:module'
import { pluginQRCode } from '@lynx-js/qrcode-rsbuild-plugin'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { defineConfig } from '@lynx-js/rspeedy'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginTypeCheck } from '@rsbuild/plugin-type-check'
import { tanstackRouter } from '@tanstack/router-plugin/rspack'
import { pluginTailwindCSS } from 'rsbuild-plugin-tailwindcss'

const require = createRequire(import.meta.url)

export default defineConfig({
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`
      }
    }),
    pluginReactLynx(),
    pluginTypeCheck(),
    pluginSass(),
    pluginImageCompress(),
    pluginTailwindCSS({
      config: 'tailwind.config.ts',
      exclude: [/[\\/]node_modules[\\/]/]
    })
  ],
  environments: {
    web: {},
    lynx: {}
  },
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react'
        })
      ],
      resolve: {
        alias: {
          react$: require.resolve('@lynx-js/react/compat')
        }
      }
    }
  }
})
