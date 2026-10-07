/// <reference types="vitest/config" />

import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

function iconStatsPlugin(): Plugin {
  const virtualModuleId = 'virtual:icon-dates'
  const resolvedVirtualModuleId = `\0${virtualModuleId}`
  return {
    name: 'vite-plugin-icon-dates',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        // Read the source SVGs in raw-icons where actual edits occur
        const getDates = (dirPath: string) => {
          if (!fs.existsSync(dirPath)) {
            return {}
          }
          const files = fs.readdirSync(dirPath)
          const dates: Record<string, number> = {}
          for (const file of files) {
            if (file.endsWith('.svg')) {
              const stat = fs.statSync(path.join(dirPath, file))
              const baseName = path.basename(file, '.svg')
              dates[baseName] = stat.mtimeMs
            }
          }
          return dates
        }
        const rawIconsRoot = path.resolve(import.meta.dirname, '../raw-icons/src')
        const uiDates = getDates(path.join(rawIconsRoot, 'ui'))
        const flagDates = getDates(path.join(rawIconsRoot, 'flags'))
        return `export const uiDates = ${JSON.stringify(uiDates)};\nexport const flagDates = ${JSON.stringify(flagDates)};`
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), iconStatsPlugin()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
