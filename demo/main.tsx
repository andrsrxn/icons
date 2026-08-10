/** biome-ignore-all lint/style/noNonNullAssertion: it exists */
/** biome-ignore-all lint/performance/noNamespaceImport: to automate all icons importing */

import { createRoot } from 'react-dom/client'
import * as fIcons from '../src/react/flags/index'
import * as icons from '../src/react/ui/index'

const uiIcons = Object.entries(icons).map(([name, Icon]) => (
  <div key={name} className='icon-card'>
    <Icon />
    <span>{name.slice(name.lastIndexOf('Icon') + 4)}</span>
  </div>
))

const flagIcons = Object.entries(fIcons)
  // biome-ignore lint/style/noMagicNumbers: to not take the literal `IconFlag`
  .filter(([name]) => name.startsWith('IconFlag') && name.length > 8)
  .map(([name, Icon]) => (
    <div key={name} className='icon-card'>
      <Icon />
      <span>{name.slice(name.lastIndexOf('IconFlag') + 8)}</span>
    </div>
  ))

const App = () => {
  return (
    <div className='icon-grid-container'>
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
