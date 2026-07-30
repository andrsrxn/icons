import type { Icon } from './types'

export const IconMusicNote: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='music-note'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M11.062 17.593c0 1.494-1.198 2.704-2.676 2.704-1.478 0-2.677-1.21-2.677-2.704 0-1.492 1.199-2.703 2.677-2.703s2.676 1.21 2.676 2.703Zm.004-11.063v1.164a1 1 0 0 0 1.245.97l5.072-1.284a1 1 0 0 0 .754-.97V5.246a1 1 0 0 0-1.245-.97L11.82 5.561a1 1 0 0 0-.755.97Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M11.062 17.598V9.203m0 0V8.59c0-1.515 0-2.272.43-2.817.43-.545 1.167-.721 2.64-1.073l3.12-.746c.385-.092.578-.138.726-.078a.5.5 0 0 1 .22.173c.093.13.093.329.093.725 0 1.025 0 1.537-.204 1.953a2 2 0 0 1-.51.653c-.356.298-.853.42-1.848.667l-4.667 1.155Zm0 8.39c0 1.494-1.198 2.704-2.676 2.704-1.478 0-2.677-1.21-2.677-2.704 0-1.492 1.199-2.703 2.677-2.703s2.676 1.21 2.676 2.703Z'
      />
    </svg>
  )
}
