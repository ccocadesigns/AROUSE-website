import { defineConfig } from 'vite'
import { resolve }      from 'path'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// swaps <!--#include "file.html"--> comments for the actual file contents at build time
function htmlInclude() {
  return {
    name: 'html-include',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html.replace(/<!--#include\s+"([^"]+)"\s*-->/g, (_, filePath) => {
          const fullPath = resolve(__dirname, filePath)
          try {
            return readFileSync(fullPath, 'utf-8')
          } catch {
            console.warn(`[html-include] Could not read: ${filePath}`)
            return ''
          }
        })
      }
    }
  }
}

export default defineConfig({
  plugins: [htmlInclude()],

  // add new pages here
  build: {
    rollupOptions: {
      input: {
        about:   resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      }
    }
  }
})
