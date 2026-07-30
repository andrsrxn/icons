import type { Icon } from './types'

export const IconMagic: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='magic'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.538s.467 4.358 2.286 6.176C16.104 11.534 20.462 12 20.462 12s-4.358.467-6.176 2.286C12.466 16.104 12 20.462 12 20.462s-.467-4.358-2.286-6.176C7.896 12.466 3.538 12 3.538 12s4.358-.467 6.176-2.286C11.534 7.896 12 3.538 12 3.538Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.538s.467 4.358 2.286 6.176C16.104 11.534 20.462 12 20.462 12s-4.358.467-6.176 2.286C12.466 16.104 12 20.462 12 20.462s-.467-4.358-2.286-6.176C7.896 12.466 3.538 12 3.538 12s4.358-.467 6.176-2.286C11.534 7.896 12 3.538 12 3.538Z'
      />
    </svg>
  )
}
