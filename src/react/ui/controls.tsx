import type { Icon } from './types'

export const IconControls: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='controls'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6.852 8.156a2.213 2.213 0 1 0 4.426 0 2.213 2.213 0 0 0-4.426 0Zm10.312 7.676a2.229 2.229 0 1 1-4.457 0 2.229 2.229 0 0 1 4.457 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.3 8.161a2.222 2.222 0 1 0-4.444 0m4.444 0a2.222 2.222 0 1 1-4.444 0m4.444 0h8.93m-13.374 0H3.769m8.931 7.671a2.222 2.222 0 0 1 4.444 0m-4.444 0a2.222 2.222 0 0 0 4.444 0m-4.444 0H3.77m13.374 0h3.087'
      />
    </svg>
  )
}
