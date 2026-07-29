import type { Icon } from '../types'

export const IconUmbrella: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='umbrella'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.494 6.569c1.23-1.86 4.487-2.627 5.862-2.738-1.332 2.051-1.897 5.8-2.058 7.658-.452-.395-1.677-1.176-2.505-1.14-1.3.054-2.429.774-3.125 1.14.03-.892.595-3.06 1.826-4.92Zm13.012 0c-1.23-1.86-4.487-2.627-5.862-2.738 1.332 2.051 1.897 5.8 2.058 7.658.452-.395 1.677-1.176 2.505-1.14 1.3.054 2.429.774 3.125 1.14-.03-.892-.596-3.06-1.826-4.92Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.831c8.332 0 8.332 8.08 8.332 8.08s-1.8-1.344-3.125-1.344c-1.152 0-2.603 1.345-2.603 1.345S13.152 10.566 12 10.566c-1.152 0-2.604 1.345-2.604 1.345s-1.451-1.345-2.603-1.345c-1.335 0-3.125 1.345-3.125 1.345s0-8.08 8.332-8.08Zm0 0c-2.025 1.682-2.58 5.415-2.604 7.07M12 3.832c2.025 1.682 2.58 5.415 2.604 7.07m-2.604 0v6.896c0 2.219-1.014 3.01-2.604 3.01s-2.603-1.123-2.603-1.981'
      />
    </svg>
  )
}
