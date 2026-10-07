/** biome-ignore-all lint/style/noNonNullAssertion: it exists */
/** biome-ignore-all lint/style/noMagicNumbers: to not take the literal 'Icon' */
/** biome-ignore-all lint/performance/noNamespaceImport: to automate all icons importing */

import { flagDates, uiDates } from 'virtual:icon-dates'
import { createRoot } from 'react-dom/client'
import * as fIcons from '../src/flags/index'
import * as icons from '../src/ui/index'

// Helper: convert PascalCase export name to kebab-case filename (or match your naming convention)
const getFileName = (name: string) =>
  name
    .replace(/^Icon(Flag)?/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
const flagIcons = Object.entries(fIcons)
  .filter(([name]) => name.startsWith('IconFlag') && name.length > 8)
  // Sort descending (newest modified first):
  .sort(([nameA], [nameB]) => {
    const fileA = getFileName(nameA)
    const fileB = getFileName(nameB)
    const timeA = flagDates[fileA] ?? 0
    const timeB = flagDates[fileB] ?? 0
    return timeB - timeA
  })
  .map(([name, Icon]) => (
    <div key={name} className='icon-card'>
      <Icon />
      <span>{name.slice(name.lastIndexOf('IconFlag') + 8)}</span>
    </div>
  ))
const uiIcons = Object.entries(icons)
  .filter(([name]) => name.startsWith('Icon') && name.length > 4)
  // Sort descending (newest modified first):
  .sort(([nameA], [nameB]) => {
    const fileA = getFileName(nameA)
    const fileB = getFileName(nameB)
    const timeA = uiDates[fileA] ?? 0
    const timeB = uiDates[fileB] ?? 0
    return timeB - timeA
  })
  .map(([name, Icon]) => (
    <div key={name} className='icon-card'>
      <Icon />
      <span>{name.slice(name.lastIndexOf('Icon') + 4)}</span>
    </div>
  ))

const App = () => {
  return (
    <div className='icon-grid-container'>
      <div className='icon-grid-category'>
        <div className='icon-grid'>
          <h2>UI: {uiIcons.length}</h2>
          <h2>Flags: {flagIcons.length}</h2>
          <h2>Total: {uiIcons.length + flagIcons.length}</h2>
        </div>
      </div>

      <div className='icon-grid-category'>
        <h2>UI Icons</h2>
        <div className='icon-grid'>{uiIcons}</div>
      </div>
      <div className='icon-grid-category'>
        <h2>Flag Icons</h2>
        <div className='icon-grid'>{flagIcons}</div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
