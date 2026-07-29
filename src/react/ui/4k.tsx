import type { Icon } from './types'

export const Icon4k: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='4k'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.542 4.481h16.916M3.542 19.52h16.916M9.3 13.45H4.571a.2.2 0 0 1-.157-.324l4.529-5.702a.2.2 0 0 1 .356.124v5.902Zm0 0h1.219m-1.219 0v3.219m3.812-9.398v4.699m0 0v4.699m0-4.7 4.938-4.5m-4.938 4.5 4.929 4.576'
      />
    </svg>
  )
}
